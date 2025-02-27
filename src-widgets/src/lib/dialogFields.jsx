import CollectionDivider from "../components/CollectionDivider";

const dialogFields = () => [
	{
		name: "view",
		label: "view",
		type: "select-views",
		multiple: false,
	},
	{
		label: "",
		type: "custom",
		component: () => <CollectionDivider />,
	},
	{
		name: "dialogAutoClose",
		label: "dialog_auto_close",
		type: "slider",
		min: 0,
		max: 30000,
		step: 100,
	},
	{
		label: "",
		type: "custom",
		component: () => <CollectionDivider />,
	},
	{
		name: "oid",
		type: "id",
		label: "oid",
		tooltip: "dialog_set_oid_tooltip",
	},
	{
		label: "",
		type: "custom",
		component: () => <CollectionDivider />,
	},
	{
		name: "dialogWidth",
		label: "dialog_width",
		type: "slider",
		min: 1,
		max: 100,
		default: 100,
		step: 1,
	},
	{
		name: "dialogHeight",
		label: "dialog_height",
		type: "slider",
		min: 1,
		max: 100,
		default: 100,
		step: 1,
	},
	{
		label: "",
		type: "custom",
		component: () => <CollectionDivider />,
	},
	{
		name: "dialogBackgroundColor",
		label: "background_color",
		type: "color",
	},

	{
		label: "",
		type: "custom",
		component: () => <CollectionDivider dividerText="dialog_button" />,
	},
	{
		name: "value",
		label: "value",
		type: "html",
		default: "",
	},
	{
		label: "",
		type: "custom",
		component: () => <CollectionDivider />,
	},
	{
		name: "dialogCloseButton",
		label: "dialog_close_button",
		type: "checkbox",
		default: false,
	},
	{
		label: "",
		type: "custom",
		component: () => <CollectionDivider />,
	},
	{
		name: "onlyIcon",
		label: "only_icon",
		type: "checkbox",
		default: false,
		hidden: "data.onlyText",
	},
	{
		name: "onlyText",
		label: "only_text",
		type: "checkbox",
		default: false,
		hidden: "data.onlyIcon",
	},
];

export default dialogFields;
