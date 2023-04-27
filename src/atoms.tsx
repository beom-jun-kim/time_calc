import { atom, selector } from "recoil";

export const minuteState = atom({
  key: "minutes",
  default: 0,
});

export const hourSelector = selector<number>({
  key: "hours",
  get: ({ get }) => {
    const minutes = get(minuteState);
    return minutes / 60;
  },
  set: ({ set }, newValue) => {
    const minutes = Number(newValue) * 60;
    set(minuteState, minutes);
  },
});


// set이란? 이 속성이 설정되면 selector는 쓰기 가능한 상태를 반환. 
// 첫번째 매개변수로 콜백 객체와 새로 입력 값이 전달. 
// 사용자가 selector를 재설정할 경우 새로 입력 값은 T 타입의 값 또는 DefaultValue 타입의 객체. 
// 콜백에는 다음이 포함

// set 매개변수
// 업스트림 Recoil 상태의 값을 설정할 때 사용되는 함수. 
// 첫 번째 매개변수는 Recoil state, 두 번째 매개변수는 새로운 값(newValue). 
// 새로운 값은 업데이트 함수나 재설정 액션을 전파하는 DefalutValue 객체

// https://recoiljs.org/ko/docs/api-reference/core/selector/