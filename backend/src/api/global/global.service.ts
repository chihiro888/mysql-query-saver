// ** Module
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common'
import { DataSource } from 'typeorm'
import moment from 'moment'

// ** Dto
import { CreateGlobalDto } from './dto/create-global.dto'
import { DeleteGlobalDto } from './dto/delete-global.dto'
import { SaveGlobalDto } from './dto/save-global.dto'

// ** Entity
import { Global } from 'src/entities/global.entity'

// ** Const
import DATE from 'src/common/constants/date'

@Injectable()
export class GlobalService {
  constructor(
    @Inject('DATA_SOURCE')
    private datasource: DataSource
  ) {}

  // ANCHOR get global
  async getGlobal(key: string): Promise<string> {
    const data = await this.datasource
      .getRepository(Global)
      .findOne({ where: { key: key } })

    if (data) {
      return data.value
    } else {
      throw new HttpException(
        'Please set global variable ' + key,
        HttpStatus.BAD_REQUEST
      )
    }
  }

  // ANCHOR get global list
  async getGlobalList(): Promise<Global[]> {
    const data = await this.datasource.getRepository(Global).find({
      order: {
        createdAt: 'DESC'
      }
    })

    return data
  }

  // ANCHOR create global
  async createGlobal(dto: CreateGlobalDto): Promise<void> {
    const global = new Global()
    global.key = dto.key
    global.value = dto.value
    global.memo = dto.memo

    await this.datasource.getRepository(Global).save(global)
  }

  // ANCHOR save global
  async saveGlobal(dto: SaveGlobalDto): Promise<void> {
    for (let i = 0; i < dto.globalList.length; i++) {
      const g = dto.globalList[i]
      const global = await this.datasource.getRepository(Global).findOne({
        where: {
          key: g.key
        }
      })
      global.value = g.value
      global.memo = g.memo
      global.updatedAt = moment().format(DATE.DATETIME)
      await this.datasource.getRepository(Global).save(global)
    }
  }

  // ANCHOR delete global
  async deleteGlobal(dto: DeleteGlobalDto): Promise<void> {
    await this.datasource
      .createQueryBuilder()
      .delete()
      .from(Global)
      .where('key = :key', { key: dto.key })
      .execute()
  }

  // ANCHOR get app info
  async getAppInfo(): Promise<any> {
    const data = await this.datasource.getRepository(Global).find()

    const appInfo = {}
    for (let i = 0; i < data.length; i++) {
      const g = data[i]
      if (g.key.includes('app')) {
        appInfo[g.key] = g.value
      }
    }

    return appInfo
  }
}
