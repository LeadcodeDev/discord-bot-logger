import { Event, BaseEvent, Factory } from '@discord-factory/core'
import { Message, MessageEmbed } from "discord.js";
import { logChannel } from "App/Channels";

@Event('messageUpdate')
export default class MessageUpdate implements BaseEvent {
	public async run(before: Message, after: Message): Promise<void> {
		const channel = logChannel(before.guild!)

		await channel.send(
			new MessageEmbed({
				title: `Mise à jour d'un message`,
				color: '#93C5FD',
				fields: [
					{ name: `Membre`, value: before.author || '*- Le chargement du membre a échoué -*', inline: true },
					{ name: `Channel`, value: before.channel, inline: true },
					{ name: `Voir dans le contexte`, value: `[Cliquez ici](${before.url})`, inline: true },
					{ name: '\u200B', value: '\u200B' },
					{ name: 'Ancien message', value: before.content || '*- Le chargement du contenu a échoué -*' },
					{ name: 'Nouveau message', value: after.content }
				],
				footer: {
					text: before.author?.tag || Factory.getInstance().$container?.client.user?.username
				}
			})
		)
	}
}
