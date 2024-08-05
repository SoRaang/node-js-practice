/** myModules.js */

export const arrs = [10, 20, 30, 40];

export function getName() {
    return 'aaaaaaaaa';
}

/**
 * 각 모듈마다 1개의 default export만 가능하다.
 * named export의 경우 import할 때 이름을 명시해야 하며, 여러 개를 export할 수 잇다.
 */