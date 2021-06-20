import { Event, BaseEvent } from '@discord-factory/core'
import { Message, MessageEmbed } from "discord.js";
import { logChannel } from "App/Channels";

@Event('messageDelete')
export default class MessageDelete implements BaseEvent {
	public async run(message: Message): Promise<void> {
		const channel = logChannel(message.guild!)

		await channel.send(
			new MessageEmbed({
				title: 'Suppression d\'un message',
				color: '#93C5FD',
				fields: [
					{ name: 'Channel', value: message.channel },
					{ name: 'Contenu du message', value: message.content || 'Content cannot be load' }
				]
			})
		)
	}
}
