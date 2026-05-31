export default {
	async fetch(request, env) {
		const inputs = {
			prompt: "Ultra realistic editorial portrait photo. Subject: Indonesian woman, age 21, with natural Southeast Asian facial features. Long black hair with natural texture. Realistic skin with natural imperfections, pores visible. She has a gentle, subtle smile. Wearing a simple white cotton blouse. Lighting Soft natural window light from the left side during golden hour. Camera Wide Shot with Canon EOS R5, 85mm lens, f/1.8, ISO 100, shallow depth of field. Background is softly blurred bedroom interior. Style Raw unedited photo, photorealistic, hyperdetailed, 8k resolution. No makeup look, natural beauty. Must look like real photograph not AI generated.",
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
