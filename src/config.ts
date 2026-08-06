import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "MiX-AIAI Lab",
	subtitle: "连接医学影像、智能计算与临床问题",
	lang: "zh_CN",
	themeColor: {
		hue: 220,
		fixed: true,
	},
	banner: {
		enable: false,
		// TODO: 演示素材已删除；如需启用横幅，请将实验室图片放入 src/assets/images/ 并更新此路径
		src: "assets/images/demo-banner.png",
		position: "center",
		credit: {
			enable: false,
			text: "",
			url: "",
		},
	},
	toc: {
		enable: true,
		depth: 2,
	},
	favicon: [],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.News,
		LinkPreset.Outputs,
		LinkPreset.Research,
		LinkPreset.Members,
		LinkPreset.Activities,
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "/avatar/MIXAIAILAB.png",
	name: "MiX-AIAI Lab",
	bio: "Medical X-Ray Advanced Imaging Algorithm and Instrumentation Laboratory\n南方医科大学 医学X射线前沿成像算法与装备实验室",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/mixaiailab",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
