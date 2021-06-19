import { Event, BaseEvent } from '@discord-factory/core'
import { Message, MessageEmbed } from "discord.js";
import { logChannel } from "App/Channels";

@Event('messageUpdate')
export default class MessageUpdate implements BaseEvent {
	public async run(before: Message, after: Message): Promise<void> {
		const channel = logChannel(before.guild!)

		await channel.send(
			new MessageEmbed({
				title: 'Mise à jour d\'un message',
				color: '#93C5FD',
				fields: [
					{ name: 'Ancien message', value: before.content },
					{ name: 'Nouveau message', value: after.content }
				]
			})
		)
	}
}
