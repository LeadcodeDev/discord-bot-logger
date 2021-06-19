import { CommandEntity, Context, EventEntity, Provider } from '@discord-factory/core'

export default class AppProvider implements Provider {
  public async boot(): Promise<void> {
    // Your code here
  }

  public async loadFile(context: Context): Promise<void> {
    const file = {
      command: () => console.log(`Loading ${(context as CommandEntity).label}`),
      event: () => console.log(`Loading ${(context as EventEntity<any>).event}`),
    }

    file[context.type!]()
  }

  public async ready(): Promise<void> {
    // Your code here
  }
}