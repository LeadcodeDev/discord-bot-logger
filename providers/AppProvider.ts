import { Context, Provider } from '@discord-factory/core'

export default class AppProvider implements Provider {
  public async boot(): Promise<void> {
    // Your code here
  }

  public async loadFile(context: Context): Promise<void> {
    // Your code here
  }

  public async ready(): Promise<void> {
    // Your code here
  }
}