import { Event, BaseEvent } from '@discord-factory/core'
import { logChannel } from "App/Channels";
import { GuildMember, MessageEmbed } from "discord.js";

@Event('guildMemberRemove')
export default class GuildMemberRemove implements BaseEvent {
	public async run(member: GuildMember): Promise<void> {
		const channel = logChannel(member.guild)

		await channel.send(
			new MessageEmbed({
				title: 'Départ d\'un membre',
				color: '#93C5FD',
				fields: [
					{ name: 'Membre', value: member.user }
				]
			})
		)
	}
}
