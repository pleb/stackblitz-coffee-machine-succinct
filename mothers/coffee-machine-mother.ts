import { coffeeMachineBuilder } from '../builders/coffee-machine-builder'

export const coffeeMachineMother = {
  typeSpresso: () => {
    return coffeeMachineBuilder().withBeans(1_000).withMilkReservoir(2_000).withWaterReservoir(5_000)
  },
  intelliMachine1000: () => {
    return coffeeMachineBuilder().withBeans(2_000).withMilkReservoir(4_000).withWaterReservoir(10_000)
  },
}
