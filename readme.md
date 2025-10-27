# 🛡️ Anti-Copy Webpage

A simple web project that protects your website content by preventing others from copying it.  
When someone tries to copy your text, a **custom fake message** will be copied instead! 😎  

---

## ✨ Features
- 🚫 Blocks normal copy (Ctrl + C / Right-click Copy)
- 🧠 Copies custom text instead of the real content
- 💬 Optional alert message when copy is attempted
- 🌐 Built using plain **HTML, CSS, and JavaScript**

---

## 🧩 How It Works
This script listens for the browser’s `copy` event and overrides it with your custom message.

```javascript
document.addEventListener("copy", (event) => {
  event.preventDefault();
  event.clipboardData.setData("text/plain", "Copied from Nabil's website without permission. Visit nabilinfo.rf.gd 😊");
  alert("Copying content is not allowed. 😄");
});
```
## Usage

```bash
# Clone the repository
git clone https://github.com/nazrulislam1835/Anti-Copy-Webpage.git
```
