export function getDurationTime(): { duration: () => number } {
    const startTime = new Date().getTime();
    return {
        duration: () => {
            return new Date().getTime() - startTime;
        }
    };
}

// 使用：await sleep(1000)
export function sleep(duration: number): Promise<void> {
    return new Promise(resolve => {
        setTimeout(resolve, duration);
    });
}