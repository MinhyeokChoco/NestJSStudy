import { Body, Controller, Get, HttpStatus, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserLoginObjectPipe, UserNameMaxCount, UserNameMaxStringCount, UserNameMinCount, UserNameMinStringCount, } from 'src/pipe/user.pipe';
import { userDTO } from 'src/dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  //   @Get(':index')
  //   findNumberIndex(@Param('index', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) index: number) {
  //     console.log(index);
  //     return typeof index;
  //    // 클라이언트 측
  //    // if(data.statusCode === 406){
  //    // }
  //   }
  // }

  // @Get(':index')
  // findNumberIndex(@Param('index', new UserNameMinCount(8), new UserNameMaxCount(12)) index: number) {
  //   console.log(index);
  //   return index;
  // }

  @Get(':index')
  findNumberIndex(@Param('index', new UserNameMinStringCount(3), new UserNameMaxStringCount(5)) index: string) {
    console.log(index);
    return index;
  }

  @Post(':index')



  // Body의 구조 분해 할당하는 부분은 pipe로 검증
  // body의 전체를 검증
  @Post("loginUser")
  login(@Body(new UserLoginObjectPipe(userDTO)) body: any) {
    // 불필요하게 실행되는 로직을 제거할 수 있고 파싱된 값을 사용할 수 있다.
    return body;
  }

}

// Params로 받는 데이터는 무조건 문자형임
// ParseIntPipe : 문자형으로 넘어온 데이터가 숫자형으로 변환할 수 있는 데이터면 검증 후 변환까지 해줌