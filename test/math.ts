/* eslint-disable no-new */
export default function BaseballGame() {
  this.play = function (computerInputNumbers, userInputNumbers) {
    return '결과 값 String';
  };
}

function makeRandomNumber() {
  // 최초 실행시 실행되는 랜덤한 숫자 생성 함수
  
}

function getInputNumber() {
  // 3자리 숫자인지(0, 중복 확인)

  // 맞으면 다음 단계 실행, 틀리면 alert
}

function checkAnswer() {
  // 일치하는 숫자 없음 -> 낫싱 출력

  // 일치하는 숫자 있음
    // 일치하는 자리 위치 파악
      // 같으면 스트라이크
      // 다르면 볼
      // 모두 일치하면 -> 정답 문구 출력, 재시작 버튼 활성화

}

function reStart() {
  // 모든 걸 리셋하고 다시 처음부터 시작 (랜덤한 숫자 생성도 포함)
}

// export default class BaseballGame {
//   play(computerInputNumbers, userInputNumbers) {
//     return "결과 값 String";
//   }
// }

new BaseballGame();
