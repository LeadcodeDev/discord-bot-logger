import { Guild, TextChannel } from "discord.js";

export enum Channels {
  LOGS_CHANNELS = '855912975881732126'
}

export function logChannel (guild: Guild): TextChannel {
  return guild.channels.cache.get(Channels.LOGS_CHANNELS) as TextChannel
}