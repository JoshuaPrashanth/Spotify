document.addEventListener("DOMContentLoaded", () => {
    let currentAudio = null;

    function resetActiveClasses() {
        document.querySelectorAll('.song').forEach(song => {
            song.classList.remove('active');
        });
        document.querySelectorAll('.tick').forEach(tick => {
            tick.style.display = 'none';
        });
    }

    resetActiveClasses();

    function togglePlayPauseIcon(isPlaying) {
        const playButton = document.querySelector('.playcir i');
        if (isPlaying) {
            playButton.classList.remove('fa-play');
            playButton.classList.add('fa-pause');
        } else {
            playButton.classList.remove('fa-pause');
            playButton.classList.add('fa-play');
        }
    }

    function addSong(n, i, audioSrc, audioId) {
        let newSong = document.createElement('div');
        newSong.classList.add('song');
        newSong.setAttribute('data-audio', audioId);

        let newIni = document.createElement('div');
        newIni.classList.add('ini');

        let newCover = document.createElement('div');
        newCover.classList.add('cover');

        let newImg = document.createElement('img');
        newImg.src = i;
        newCover.appendChild(newImg);

        let newName = document.createElement('h3');
        newName.classList.add('name');
        newName.textContent = n;

        newIni.appendChild(newCover);
        newIni.appendChild(newName);

        let newDuo = document.createElement('div');
        newDuo.classList.add('duo');

        let tickIcon = document.createElement('i');
        tickIcon.classList.add('fa-solid', 'fa-circle-check', 'tick');

        let newIcon = document.createElement('i');
        newIcon.classList.add('fa-solid', 'fa-ellipsis', 'fa-rotate-90', 'j');

        newDuo.appendChild(tickIcon);
        newDuo.appendChild(newIcon);

        newSong.appendChild(newIni);
        newSong.appendChild(newDuo);

        document.querySelector('.container').appendChild(newSong);

        let newAudio = document.createElement('audio');
        newAudio.id = audioId;
        newAudio.src = audioSrc;
        document.body.appendChild(newAudio);

        newSong.addEventListener('click', () => {
            document.querySelectorAll('audio').forEach(audio => {
                audio.pause();
                audio.currentTime = 0;
            });
            document.querySelectorAll('.song').forEach(s => s.classList.remove('active'));
            newSong.classList.add('active');
            let audioElement = document.getElementById(audioId);
            audioElement.play();
            currentAudio = audioElement;
            togglePlayPauseIcon(true);
        });

        newAudio.addEventListener('play', () => {
            tickIcon.style.display = 'inline';
            togglePlayPauseIcon(true);
        });

        newAudio.addEventListener('pause', () => {
            tickIcon.style.display = 'none';
            togglePlayPauseIcon(false);
        });

        newAudio.addEventListener('ended', () => {
            tickIcon.style.display = 'none';
            togglePlayPauseIcon(false);
        });

        newAudio.addEventListener('error', () => {
            console.error(`Error loading audio: ${audioSrc}`);
        });
    }

    addSong('Perfect', 'https://th.bing.com/th/id/OIP.ajZMGyDX6J6M9IrJiWHOhAAAAA?w=287&h=180&c=7&r=0&o=5&pid=1.7', 'https://pagalworld.com.mx/wp-content/uploads/2023/02/Perfect.mp3', 'audio1');
    addSong('Heat Waves', 'https://images.genius.com/67abc49ab0c17779c4f63a9e8717cba4.1000x1000x1.png', 'https://raw.githubusercontent.com/JoshuaPrashanth/Spotify/232ad3283887ac0c0159ecdc50f8a27bcd914ada/Heat-Waves(PaglaSongs).mp3', 'audio2');
    addSong('Dancin', "https://th.bing.com/th/id/OIP.KBia1gzaOojSlzUN5CceRAHaHa?w=182&h=182&c=7&r=0&o=5&pid=1.7", 'https://raw.githubusercontent.com/JoshuaPrashanth/Spotify/232ad3283887ac0c0159ecdc50f8a27bcd914ada/Aaron%20Smith%20-%20Dancin%20(KRONO%20Remix)%20-%20Lyrics.mp3', 'audio3')
    

    document.querySelector('.playcir').addEventListener('click', () => {
        if (currentAudio) {
            if (currentAudio.paused) {
                currentAudio.play();
                togglePlayPauseIcon(true);
            } else {
                currentAudio.pause();
                togglePlayPauseIcon(false);
            }
        }
    });
});
