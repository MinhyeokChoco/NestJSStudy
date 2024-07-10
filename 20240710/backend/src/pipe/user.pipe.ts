import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { ZodSchema } from "zod";

// implements : 형태를 상속
export class UserNamePipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        // 파이프 선언하고 호출하면 value의 값에 입력값이 할당된다.
        // @Body("index", userNamePipe) // value
        // Body에서 구조분해 할당해서 할당해준 index가 value
        // metadata : 데이터를 설명하는 데이터
        // metadata : { metatype : [function : Number], type : "body", data : "index"};
        console.log(metadata);
        console.log(typeof value);
        console.log(isNaN(value));
        if (isNaN(value)) {
            // BadRequestException 에러 발생 응답 메시지를 응답할 때 메시지 내용 추가해서 객체 생성
            throw new BadRequestException("데이터 타입이 문자형으로 params에 전달했어");
        }
        return parseInt(value);
    }
}

export class UserNameMinCount implements PipeTransform {
    count: number = null;
    constructor(count: number) {
        this.count = count;
    }
    transform(value: any, metadata: ArgumentMetadata) {
        if (value.length < (this.count || 3)) {
            throw new BadRequestException(`최소 ${this.count || 3}자 이상 이름을 작성해라`);
        }
        return value;
    }
}

export class UserNameMaxCount implements PipeTransform {
    count: number = null;
    constructor(count: number) {
        this.count = count;
    }
    transform(value: any, metadata: ArgumentMetadata) {
        if (value.length > (this.count || 8))
            throw new BadRequestException(`최대 ${this.count || 8}자 이하 이름을 작성해라`)

        return value;
    }
}

// 유저의 이름을 받고 파이프 처리를 해서
// 유저의 이름이 문자형 타입이면 숫자 포함 X
// 문자형 타입이고 최소 3자 이상 5자 이하

// post 요청 보내서 확인 해보고

// 게시판 유저 // 이미 하신 분은 pipe로 dto까지 구현

export class UserNameMinStringCount implements PipeTransform {
    count: number = null;
    constructor(count: number) {
        this.count = count;
    }
    transform(value: any, metadata: ArgumentMetadata) {
        if (value.length < (this.count || 3))
            throw new BadRequestException(`최소 ${this.count || 3}자 이상 이름을 작성해라`)
        for (let i = 0; i < value.length; i++) {
            if (!isNaN(value[i])) {
                throw new BadRequestException('문자형을 입력해주세요')
            }
        }
        return value;
    }
}

export class UserNameMaxStringCount implements PipeTransform {
    count: number = null;
    constructor(count: number) {
        this.count = count;
    }
    transform(value: any, metadata: ArgumentMetadata) {
        if (value.length > (this.count || 5) && (value !== String))
            throw new BadRequestException(`최대 ${this.count || 5}자 이하 이름을 작성해라`)
        for (let i = 0; i < value.length; i++) {
            if (!isNaN(value[i])) {
                throw new BadRequestException('문자형을 입력해주세요')
            }
        }
        return value;
    }
}

// parseIntPipe 풀어서 저렇게 implements로 상속해서 사용하는것인지 여쭤보기

export class UserLoginObjectPipe implements PipeTransform {
    // 객체의 형태를 생성자에서 받고
    // ZodSchema === z.object로 만든 객체가 맞는지 타입 검증
    constructor(private userDTOBody: ZodSchema) { }
    transform(value: any, metadata: ArgumentMetadata) {
        try {
            // parse 전달한 값을 객체로 변환하는 작업
            // 반환 되는 데이터 타입이 object 이다.
            const parseIntAge = parseInt(value.age);
            value.age = parseIntAge;
            const parseValue = this.userDTOBody.safeParse(value)
            console.log(parseValue)
            if (parseValue.success) {
                return value
            } else {
                return ("조건에 맞지 않아요");
            }
        } catch (error) {
            console.log(error);
            throw new BadRequestException("user login DTO error");
        }
    }
}