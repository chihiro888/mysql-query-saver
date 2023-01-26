import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Post,
  Put,
  Query,
  Res,
  UseGuards
} from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Response } from 'express'
import { AuthGuard } from 'src/common/guard/auth.guard'
import { DashboardService } from './dashboard.service'

// ANCHOR dashboard controller
@ApiTags('dashboard')
@Controller('api/dashboard')
export class DashboardController {
  constructor(private dashboardService: DashboardService) {}

  // ANCHOR get admin count
  @UseGuards(AuthGuard)
  @Get('getAdminCount')
  @ApiOperation({
    summary: '관리자 카운트',
    description: '관리자 카운트를 반환합니다.'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: '데이터 조회가 성공적인 경우 반환'
  })
  async getAdminCount(@Res() res: Response) {
    const data = await this.dashboardService.getAdminCount()

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }

  // ANCHOR get login history count
  @UseGuards(AuthGuard)
  @Get('getLoginHistoryCount')
  @ApiOperation({
    summary: '로그인 이력 카운트',
    description: '로그인 이력 카운트를 반환합니다.'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: '데이터 조회가 성공적인 경우 반환'
  })
  async getLoginHistoryCount(@Res() res: Response) {
    const data = await this.dashboardService.getLoginHistoryCount()

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }

  // ANCHOR get image count
  @UseGuards(AuthGuard)
  @Get('getImageCount')
  @ApiOperation({
    summary: '이미지 카운트',
    description: '이미지 카운트를 반환합니다.'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: '데이터 조회가 성공적인 경우 반환'
  })
  async getImageCount(@Res() res: Response) {
    const data = await this.dashboardService.getImageCount()

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }

  // ANCHOR get setting count
  @UseGuards(AuthGuard)
  @Get('getSettingCount')
  @ApiOperation({
    summary: '설정 카운트',
    description: '설정 카운트를 반환합니다.'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: '데이터 조회가 성공적인 경우 반환'
  })
  async getSettingCount(@Res() res: Response) {
    const data = await this.dashboardService.getSettingCount()

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }

  // ANCHOR get admin line chart
  @UseGuards(AuthGuard)
  @Get('getAdminLineChart')
  @ApiOperation({
    summary: '관리자 라인 차트',
    description: '관리자 라인 차트를 반환합니다.'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: '데이터 조회가 성공적인 경우 반환'
  })
  async getAdminLineChart(@Res() res: Response) {
    const data = await this.dashboardService.getAdminLineChart()

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }

  // ANCHOR get login history line chart
  @UseGuards(AuthGuard)
  @Get('getLoginHistoryLineChart')
  @ApiOperation({
    summary: '로그인 이력 라인 차트',
    description: '로그인 이력 라인 차트를 반환합니다.'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: '데이터 조회가 성공적인 경우 반환'
  })
  async getLoginHistoryLineChart(@Res() res: Response) {
    const data = await this.dashboardService.getLoginHistoryLineChart()

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }

  // ANCHOR get image line chart
  @UseGuards(AuthGuard)
  @Get('getImageLineChart')
  @ApiOperation({
    summary: '이미지 라인 차트',
    description: '이미지 라인 차트를 반환합니다.'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: '데이터 조회가 성공적인 경우 반환'
  })
  async getImageLineChart(@Res() res: Response) {
    const data = await this.dashboardService.getImageLineChart()

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }

  // ANCHOR get setting line chart
  @UseGuards(AuthGuard)
  @Get('getSettingLineChart')
  @ApiOperation({
    summary: '설정 라인 차트',
    description: '설정 라인 차트를 반환합니다.'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: '데이터 조회가 성공적인 경우 반환'
  })
  async getSettingLineChart(@Res() res: Response) {
    const data = await this.dashboardService.getSettingLineChart()

    // return 200 response
    res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: '',
      data
    })
  }
}
