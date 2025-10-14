(function () {
  const sanitizeDigits = (value) =>
    (value || "").replace(/[^0-9]/g, "").replace(/^84/, "0");

  const extractErrorMessage = (payload) => {
    if (!payload) return "";
    if (typeof payload === "string") return payload;
    if (payload.message) return payload.message;
    if (payload.error) return payload.error;
    if (payload.errors && typeof payload.errors === "object") {
      const first = Object.values(payload.errors)
        .flat()
        .find(Boolean);
      if (first) return first;
    }
    return "";
  };

  const init = () => {
    if (typeof fetchBaseURL !== "function") {
      return;
    }

    const joinButton = document.querySelector(
      ".top25 .nrc-button, .btn-group .btn-submit"
    );
    if (!joinButton) {
      return;
    }

    const playerIdInput = document.getElementById("playerid");
    const passwordInput = document.getElementById("password");
    const contactInput = document.querySelector(
      ".react-tel-input input.form-control"
    );

    if (!playerIdInput || !passwordInput) {
      return;
    }

    let isSubmitting = false;
    const originalContent = joinButton.innerHTML;

    const setLoading = (loading) => {
      isSubmitting = loading;
      joinButton.disabled = loading;
      joinButton.classList.toggle("is-loading", loading);
      joinButton.innerHTML = loading ? "Processing..." : originalContent;
    };

    joinButton.addEventListener("click", async () => {
      if (isSubmitting) return;

      const playerId = playerIdInput.value.trim();
      const password = passwordInput.value;
      const contactRaw = contactInput ? contactInput.value.trim() : "";
      const contactSanitized = sanitizeDigits(contactRaw);

      if (playerId.length < 5 || playerId.length > 13) {
        alert("Please enter a valid Player ID (5-13 characters).");
        return;
      }

      if (password.length < 8 || password.length > 20) {
        alert("Password must be between 8 and 20 characters.");
        return;
      }

      if (contactInput && contactSanitized.length < 9) {
        alert("Please enter a valid contact number.");
        return;
      }

      setLoading(true);

      try {
        const baseUrl = await fetchBaseURL();
        if (!baseUrl) {
          throw new Error("Unable to resolve API endpoint.");
        }

        const payload = {
          phone: playerId,
          password,
        };

        if (contactSanitized) {
          payload.mobile = contactSanitized;
        }

        const response = await fetch(`${baseUrl}/api/register_user`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });

        let data = null;
        try {
          data = await response.json();
        } catch (_error) {
          data = null;
        }

        const registrationSucceeded =
          response.ok &&
          data &&
          ((data.status === true && typeof data.token === "string") ||
            typeof data.token === "string" ||
            data.message === "REGISTER_SUCCESS");

        if (registrationSucceeded) {
          const token = data.token;
          if (token) {
            localStorage.setItem("token", token);
            if (typeof setAuthToken === "function") {
              setAuthToken(token);
            }
          }

          if (typeof APIUser === "function") {
            try {
              await APIUser();
            } catch (_error) {
              // Non-fatal; continue redirect
            }
          }

          window.location.replace("./003-index.html");
          return;
        }

        const message =
          extractErrorMessage(data) ||
          "Registration failed. Please try again.";
        alert(message);
      } catch (error) {
        console.error("Registration error:", error);
        alert("Registration error. Please try again later.");
      } finally {
        setLoading(false);
      }
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
