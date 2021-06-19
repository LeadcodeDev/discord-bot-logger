import { Event, BaseEvent } from '@discord-factory/core'
import { GuildMember, MessageEmbed } from "discord.js";
import { logChannel } from "App/Channels";

@Event('guildMemberAdd')
export default class GuildMemberAdd implements BaseEvent {
	public async run(member: GuildMember): Promise<void> {
		const channel = logChannel(member.guild)

		await channel.send(
			new MessageEmbed({
				title: 'Nouveau membre',
				color: '#93C5FD',
				fields: [
					{ name: 'Membre', value: member.user }
				]
			})
		)
	}
}
