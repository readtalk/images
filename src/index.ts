export default {
	async fetch(request, env) {
		const inputs = {
			prompt: "realistic images, asian girls, casual styles, girly in the city",
		};

		const response = await env.AI.run(
			"black-forest-labs/flux-2-max",
			inputs,
		);

		return new Response(response, {
			headers: {
				"content-type": "image/png",
			},
		});
	},
} satisfies ExportedHandler<Env>;
