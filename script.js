    // The fake text that will be copied instead of the real one
    const fakeText = "Copied from Nabil's website without permission. Visit nabilinfo.rf.gd 😊";

    // Listen for copy event
    document.addEventListener("copy", (event) => {
      event.preventDefault(); // stop normal copy
      // Write your fake text into clipboard
      event.clipboardData.setData("text/plain", fakeText);
      alert("Copying content is not allowed. 😄");
    });