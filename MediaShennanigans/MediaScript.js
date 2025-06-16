
        function changeBackground(videoSrc, audioSrc) {
            const video = document.getElementById('background-video');
            const audio = document.getElementById('background-audio');
            const overlay = document.getElementById('overlay');
            const pauseButton = document.getElementById('pause-btn');
            video.classList.add('slide-up');
            setTimeout(() => {
                video.pause();
                audio.pause();
                video.src = videoSrc;
                audio.src = audioSrc;
                video.load();
                audio.load();
                video.classList.remove('slide-up');

                if (overlay.style.display === 'none') {
                    video.oncanplay = () => {
                        video.muted = true;
                        video.play().catch(() => {});
                        if (pauseButton.innerText === '▷') {
                            video.pause().catch(() => {});
                        }
                        video.oncanplay = null;
                    };
                    audio.oncanplay = () => {
                        audio.play().catch(() => {});
                        if (pauseButton.innerText === '▷') {
                            audio.pause().catch(() => {});
                        }                        
                        audio.oncanplay = null;
                    };
                }
            }, 200);
        }

        document.addEventListener('DOMContentLoaded', () => {
            let video = document.getElementById('background-video');
            let audio = document.getElementById('background-audio');
            const overlay = document.getElementById('overlay');
            const button = document.getElementById('enter-btn');
            const volumeSlider = document.getElementById('volume-slider');
            const pauseButton = document.getElementById('pause-btn');

            pauseButton.addEventListener('click', () => {
                video = document.getElementById('background-video');
                audio = document.getElementById('background-audio');
                if (video.paused) {
                    video.play();
                    audio.play();
                    pauseButton.innerText = '||';
                } else {
                    video.pause();
                    audio.pause();
                    pauseButton.innerText = '▷';
                }
            });

            button.addEventListener('click', () => {
                video = document.getElementById('background-video');
                audio = document.getElementById('background-audio');
                overlay.style.display = 'none';
                video.muted = true;

                video.play().catch(() => {});
                audio.play().catch(() => {});
            });
            volumeSlider.addEventListener('input', (event) => {
                audio.volume = parseFloat(volumeSlider.value);

            });

            video.load();
            audio.volume = parseFloat(volumeSlider.value);

            video.pause();
            audio.pause();
        });
        document.addEventListener('keydown', function(event) {
            if (event.code === 'Space' || event.key === ' ') {
                event.preventDefault();
                const pauseButton = document.getElementById('pause-btn');
                pauseButton.click();
            }
        });