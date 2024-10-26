export const preloadImage = (src: string) => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = src;
        image.onload = () => resolve(src);
        image.onerror = () => reject("이미지 사전 로딩 실패");
    });
};

export const preloadImages = (srcs: string[]) => {
    return Promise.all(srcs.map((src) => preloadImage(src)));
};

export const preloadVideo = (src: string) => {
    return new Promise((resolve, reject) => {
        const video = document.createElement("video");
        video.src = src;
        video.onloadeddata = () => resolve(src);
        video.onerror = () => reject("비디오 사전 로딩 실패");
    });
};

export const preloadVideos = (srcs: string[]) => {
    return Promise.all(srcs.map((src) => preloadVideo(src)));
};

export const preloadAssets = async (srcs: string[]) => {
    const images = srcs.filter((src) => src.includes(".webp"));
    const videos = srcs.filter((src) => src.includes(".webm"));

    return Promise.all([preloadImages(images), preloadVideos(videos)]);
};
