import { DataBuilder, proxyBuilder, randomNumber } from '@makerx/ts-object-mother'

import { CoffeeMachine } from '../models/coffee-machine'

export class CoffeeMachineBuilder extends DataBuilder<CoffeeMachine> {
  constructor() {
    super({
      beans: randomNumber(),
      milkReservoir: randomNumber(),
      waterReservoir: randomNumber(),
    })
  }
}

export const coffeeMachineBuilder = proxyBuilder<CoffeeMachineBuilder, CoffeeMachine>(CoffeeMachineBuilder)
