import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import { LinkPreset, type NavBarLink } from "@/types/config";

export const LinkPresets: { [key in LinkPreset]: NavBarLink } = {
	[LinkPreset.Home]: {
		name: i18n(I18nKey.home),
		url: "/",
	},
	[LinkPreset.About]: {
		name: i18n(I18nKey.about),
		url: "/about/",
	},
	[LinkPreset.Archive]: {
		name: i18n(I18nKey.archive),
		url: "/archive/",
	},
	[LinkPreset.News]: {
		name: i18n(I18nKey.news),
		url: "/news/",
	},
	[LinkPreset.Outputs]: {
		name: i18n(I18nKey.outputs),
		url: "/outputs/",
	},
	[LinkPreset.Research]: {
		name: i18n(I18nKey.research),
		url: "/research/",
	},
	[LinkPreset.Members]: {
		name: i18n(I18nKey.members),
		url: "/members/",
	},
	[LinkPreset.Activities]: {
		name: i18n(I18nKey.activities),
		url: "/activities/",
	},
};
