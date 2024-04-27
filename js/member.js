// memberId onblur
// memberId onfocus
function memberIdCheck(state) {
  const memberId = document.querySelector("#memberId");
  const memberIdMessage = document.querySelector("#memberIdMessage");

  if (state === "blur") {
    if (memberId.value === "") {
      memberIdMessage.innerHTML = `필수입력 항목입니다.`;
      return false;
    } else {
      let IdExp = /^[a-z]+[a-z0-9]{5,19}$/g;
      if (!memberId.value.match(IdExp)) {
        memberIdMessage.innerHTML = `잘못된 형식입니다.`;
        return false;
      } else {
        memberIdMessage.innerHTML = `ok.`;
        return true;
      }
    }
  } else if (state === "focus") {
    memberIdMessage.innerHTML = `영문자로 시작하는 영문자 또는 숫자 6~20자`;
    return flase;
  }
}

// memberPw onblur
// memberPw onfocus
function memberPwCheck(state) {
  const memberPw = document.querySelector("#memberPw");
  const memberPwMessage = document.querySelector("#memberPwMessage");

  if (state === "blur") {
    if (memberPw.value === "") {
      memberPwMessage.innerHTML = `필수입력 항목입니다.`;
      return false;
    } else {
      let PwExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
      if (!memberPw.value.match(PwExp)) {
        memberPwMessage.innerHTML = `잘못된 형식입니다.`;
        return false;
      } else {
        memberPwMessage.innerHTML = `ok.`;
        return true;
      }
    }
  } else if (state === "focus") {
    memberPwMessage.innerHTML = `영문 숫자 특수기호 조합 8자리 이상`;
    return flase;
  }
}

// memberPwPw 비밀번호확인
function memberPwPwCheck(state) {
  const memberPw = document.querySelector("#memberPw");
  const memberPwPw = document.querySelector("#memberPwPw");
  const memberPwPwMessage = document.querySelector("#memberPwPwMessage");

  if (state === "blur") {
    if (memberPw.value === memberPwPw.value) {
      memberPwPwMessage.innerHTML = `ok.`;
      return true;
    } else {
      memberPwPwMessage.innerHTML = `일치하지 않습니다.`;
      return false;
    }
  } else if (state === "focus") {
    memberPwPwMessage.innerHTML = `패스워드를 입력 하세요`;
    return flase;
  }
}

// memberName onblur
// memberName onfocus
function memberNameCheck(state) {
  const memberName = document.querySelector("#memberName");
  const memberNameMessage = document.querySelector("#memberNameMessage");

  if (state === "blur") {
    if (memberName.value === "") {
      memberNameMessage.innerHTML = `필수입력 항목입니다.`;
      return false;
    } else {
      let nameExp = /^[가-힣]{2,4}$/;
      if (!memberName.value.match(nameExp)) {
        memberNameMessage.innerHTML = `잘못된 형식입니다.`;
        return false;
      } else {
        memberNameMessage.innerHTML = `ok.`;
        return true;
      }
    }
  } else if (state === "focus") {
    memberNameMessage.innerHTML = `한글 이름 2~4자 이내`;
    return flase;
  }
}

// memberNickName onblur
// memberNickName onfocus
function nickNameCheck(state) {
  const memberNickName = document.querySelector("#memberNickName");
  const memberNickNameMessage = document.querySelector("#memberNickNameMessage");

  if (state === "blur") {
    if (memberNickName.value === "") {
      memberNickNameMessage.innerHTML = `필수입력 항목입니다.`;
      return false;
    } else {
      let nickExp = /^[a-zA-Z](?=.*[a-zA-Z])(?=.*[0-9]).{4,12}$/g;
      if (!memberNickName.value.match(nickExp)) {
        memberNickNameMessage.innerHTML = `잘못된 형식입니다.`;
        return false;
      } else {
        memberNickNameMessage.innerHTML = `ok.`;
        return true;
      }
    }
  } else if (state === "focus") {
    memberNickNameMessage.innerHTML = `최소4글자 최대12글 영문(필수),숫자(필수).`;
    return false;
  }
}

// memberEmail onblur
// memberEmail onfocus
function emailCheck(state) {
  const memberEmail = document.querySelector("#memberEmail");
  const memberEmailMessage = document.querySelector("#memberEmailMessage");

  if (state === "blur") {
    if (memberEmail.value === "") {
      memberEmailMessage.innerHTML = `필수입력 항목입니다.`;
      return false;
    } else {
      let emailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
      if (!memberEmail.value.match(emailExp)) {
        memberEmailMessage.innerHTML = `잘못된 형식입니다.`;
        return false;
      } else {
        memberEmailMessage.innerHTML = `ok.`;
        return true;
      }
    }
  } else if (state === "focus") {
    memberEmailMessage.innerHTML = `이메일 형식으로 입력.`;
    return false;
  }
}

// memberPhone onblur
// memberPhone onfocus
function phoneCheck(state) {
  const memberPhone = document.querySelector("#memberPhone");
  const memberPhoneMessage = document.querySelector("#memberPhoneMessage");

  if (state === "blur") {
    if (memberPhone.value === "") {
      memberPhoneMessage.innerHTML = `필수입력 항목입니다.`;
      return false;
    } else {
      let phoneExp = /^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
      if (!memberPhone.value.match(phoneExp)) {
        memberPhoneMessage.innerHTML = `잘못된 형식입니다.`;
        return false;
      } else {
        memberPhoneMessage.innerHTML = `ok.`;
        return true;
      }
    }
  } else if (state === "focus") {
    memberPhoneMessage.innerHTML = `휴대폰 번호 형식으로 입력.`;
    return false;
  }
}

// 가입 버튼
function allCheck(event) {
  if (memberIdCheck("blur") && memberPwCheck("blur") && memberPwPwCheck("blur") && memberNameCheck("blur") && nickNameCheck("blur") && emailCheck("blur") && phoneCheck("blur")) {
    // alert(`id = ${document.querySelector("#memberId")}`);
    alert("가입완료.");
    return true;
  } else {
    alert("작성 오류로 인해 가입에 실패하였습니다.");
    event.preventDefault();
  }
}