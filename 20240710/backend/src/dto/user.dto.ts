// 데이터를 검증하고 파싱을 하기 위해서 사용할 라이브러리
// zod 스키마의 정의를 검증하기 위해서 사용.

import { z } from "zod";

// 객체의 형태를 검증할 때

// 객체의 형태를 정의
export const userDTO = z.object({
    // 문자 데이터 타입이고
    // 객체의 키의 이름은 name
    name: z.string(),

    // 길이가 있어
    // 체이닝 메서드 min을 호출해서 min(3) 최소 3
    age: z.number().min(3).max(100),
    // 컨트롤러 로직이 실행되기 전에 불필요하게 실행되는 로직을 방지
})

// 객체의 형태 검증
// safeParse : zod에서 제공하는 메서드 / 데이터를 검증하고 검증 결과를 promise로 반환
const result = userDTO.safeParse({
    // 입력받은 객체의 값
    name: "hyeok",
    age: 28
})

if (result.success) {
    console.log(result.data);
} else {
    console.log(result.error);
}

// promise 객체 안에 데이터 값이랑 에러 값이 기본 디폴트값으로 있는지 여쭤보기