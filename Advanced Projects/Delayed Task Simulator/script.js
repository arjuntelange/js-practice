const task_status = document.getElementById("status");
const button = document.getElementById("start-btn");

button.addEventListener("click", async () => {

    task_status.textContent = "Processing Universe... 🌌";

    try {
        await new Promise(resolve => setTimeout(resolve, 1200));

        task_status.textContent = "Calling Elon Musk... 📞";

        await new Promise(resolve => setTimeout(resolve, 2200));

        task_status.textContent = "Sundar Pichai is checking your resume... 👀";

        await new Promise(resolve => setTimeout(resolve, 2500));

        task_status.textContent = "Mark Zuckerberg sent a friend request... 👤";

        await new Promise(resolve => setTimeout(resolve, 2000));

        task_status.textContent = "NASA wants your GitHub profile... 🚀";

        await new Promise(resolve => setTimeout(resolve, 2400));

        task_status.textContent = "Google, Tesla and NASA are fighting to hire you 😎🔥";

    } catch {
        task_status.textContent = "System Error: Too Much Talent Detected ⚠️";
    }
});