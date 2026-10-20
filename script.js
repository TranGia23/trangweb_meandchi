
document.addEventListener("DOMContentLoaded", () => {
    // Hiệu ứng trái tim khi nhấn màn hình
    document.addEventListener("click", (event) => {
        if (event.target.closest("a, button")) {
            const heart = document.createElement("span");
            heart.className = "heart";
            heart.textContent = "💗";
            heart.style.left = event.clientX + "px";
            heart.style.top = event.clientY + "px";
            heart.style.fontSize = "23px";
            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 1500);
        }
    });

    // Nhạc nền: trình duyệt có thể yêu cầu người dùng bấm phát
    const music = document.getElementById("bgMusic");
    const musicButton = document.getElementById("musicButton");

    if (music && musicButton) {
        musicButton.addEventListener("click", async () => {
            try {
                if (music.paused) {
                    await music.play();
                    musicButton.textContent = "⏸ Tạm dừng nhạc";
                } else {
                    music.pause();
                    musicButton.textContent = "🎵 Phát nhạc";
                }
            } catch (error) {
                alert("Không phát được nhạc. Hãy kiểm tra file music/normal-no-more.mp3");
            }
        });

        music.addEventListener("play", () => {
            musicButton.textContent = "⏸ Tạm dừng nhạc";
        });

        music.addEventListener("pause", () => {
            musicButton.textContent = "🎵 Phát nhạc";
        });
    }

    // Phóng to ảnh album khi nhấn
    document.querySelectorAll(".photo-grid img").forEach((photo) => {
        photo.addEventListener("click", () => {
            const viewer = document.getElementById("photoViewer");
            const viewerImage = document.getElementById("viewerImage");

            if (viewer && viewerImage) {
                viewerImage.src = photo.src;
                viewer.showModal();
            }
        });
    });

    // Lời nhắn ngẫu nhiên
    const surpriseButton = document.getElementById("surpriseButton");
    const surpriseText = document.getElementById("surpriseText");

    if (surpriseButton && surpriseText) {
        surpriseButton.addEventListener("click", () => {
            const messages = [
                "Chúc mẹ và chị luôn xinh đẹp, bình an và hạnh phúc! 💗",
                "Mong mọi điều dịu dàng nhất sẽ đến với mẹ và chị. 🌷",
                "Cảm ơn mẹ và chị vì đã luôn là những người tuyệt vời. 💐",
                "Ngày nào cũng mong mẹ và chị cười thật nhiều! 💕"
            ];

            surpriseText.textContent =
                messages[Math.floor(Math.random() * messages.length)];
        });
    }
});
