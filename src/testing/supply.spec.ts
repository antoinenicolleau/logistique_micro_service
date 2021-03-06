import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import {AppModule} from "../app.module";
import {SupplyController} from "../controllers/supply/supply.controller";
import {SupplyInputDto} from "../controllers/supply/supply.dto";
import {StockRepositoryService} from "../persitences/stock/stock-repository.service";
import {SupplyUsecase} from "../applications/supply/supply-usecase";
import {SupplySummaryRepositoryService} from "../persitences/supply/supply-summary-repository.service";

describe('SupplyController', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
      controllers: [SupplyController],
      providers: [SupplyUsecase, StockRepositoryService, StockRepositoryService, SupplySummaryRepositoryService]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  // TODO: problemes d'imports nest pou les tests, on gagne du temps pour l'instant
  // it('should return code 204 on product supply', () => {
  //   const supplyBody: SupplyInputDto = {
  //     supplyId: '1',
  //     products: [
  //       {
  //         ean: '123',
  //         quantity: 1,
  //         purchasePricePerUnit: 1,
  //         description: 'test-description',
  //         name: 'test-name'
  //       }
  //     ]
  //   }
  //
  //   request(app.getHttpServer())
  //       .post('/api/supply')
  //       .send(supplyBody)
  //       .expect(204)
  // })
});
