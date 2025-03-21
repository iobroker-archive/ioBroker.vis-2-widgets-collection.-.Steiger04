import CollectionDivider from "../components/CollectionDivider";

const dialogFields = () => [
	{
		label: "",
		type: "custom",
		component: () => <CollectionDivider dividerText="gauge_basic_options" />,
	},
	{
		name: "gaugeType",
		label: "gauge_type",
		type: "select",
		options: [
			{ value: "linear", label: "linear" },
			{ value: "radial", label: "radial" },
		],
		default: "linear",
		noTranslation: true,
	},
	{
		name: "gaugeMinValue",
		type: "number",
		label: "gauge_min_value",
		default: 0,
		step: 1,
	},
	{
		name: "gaugeMaxValue",
		type: "number",
		label: "gauge_max_value",
		default: 100,
		step: 1,
	},
	{
		name: "gaugePadding",
		type: "number",
		label: "gauge_padding",
		default: 8,
		step: 1,
		min: 0,
	},
	{
		name: "gaugeIconFit",
		type: "select",
		label: "gauge_icon_fit",
		options: [
			{ value: "contain", label: "contain" },
			{ value: "cover", label: "cover" },
		],
		default: "contain",
		noTranslation: true,
	},
	{
		label: "",
		type: "custom",
		component: () => (
			<CollectionDivider dividerText="gauge_linear_borders_options" />
		),
		hidden: (data) => data.gaugeType !== "linear",
	},
	{
		name: "gaugeBorderRadius",
		type: "number",
		label: "gauge_border_radius",
		default: 0,
		step: 1,
		min: 0,
		hidden: (data) => data.gaugeType !== "linear",
	},
	{
		label: "",
		type: "custom",
		component: () => (
			<CollectionDivider dividerText="gauge_linear_progress_bar_options" />
		),
		hidden: (data) => data.gaugeType !== "linear",
	},
	{
		name: "gaugeBarBeginCircle",
		type: "number",
		label: "gauge_bar_begin_circle",
		default: 30,
		step: 1,
		min: 0,
		hidden: (data) => data.gaugeType !== "linear",
	},
	{
		name: "gaugeBarLength",
		type: "number",
		label: "gauge_bar_length",
		default: 85,
		step: 1,
		min: 0,
		hidden: (data) => data.gaugeType !== "linear",
	},
	{
		label: "",
		type: "custom",
		component: () => (
			<CollectionDivider dividerText="gauge_linear_coloring_options" />
		),
		hidden: (data) => data.gaugeType !== "linear",
	},
	{
		name: "gaugeColorBarEnd",
		type: "color",
		label: "gauge_color_bar_end",
		default: "",
		hidden: (data) => data.gaugeType !== "linear",
	},
	{
		name: "gaugeColorBarProgressEnd",
		type: "color",
		label: "gauge_color_bar_progress_end",
		default: "",
		hidden: (data) => data.gaugeType !== "linear",
	},
	{
		label: "",
		type: "custom",
		component: () => (
			<CollectionDivider dividerText="gauge_linear_element_positioning_options" />
		),
		hidden: (data) => data.gaugeType !== "linear",
	},
	{
		name: "gaugeTickSide",
		type: "select",
		label: "gauge_tick_side",
		options: [
			{ value: "both", label: "both" },
			{ value: "left", label: "left" },
			{ value: "right", label: "right" },
		],
		default: "both",
		noTranslation: true,
		hidden: (data) => data.gaugeType !== "linear",
	},
	{
		name: "gaugeNeedleSide",
		type: "select",
		label: "gauge_needle_side",
		options: [
			{ value: "both", label: "both" },
			{ value: "left", label: "left" },
			{ value: "right", label: "right" },
		],
		default: "both",
		noTranslation: true,
		hidden: (data) => data.gaugeType !== "linear",
	},
	{
		name: "gaugeNumberSide",
		type: "select",
		label: "gauge_number_side",
		options: [
			{ value: "both", label: "both" },
			{ value: "left", label: "left" },
			{ value: "right", label: "right" },
		],
		default: "both",
		noTranslation: true,
		hidden: (data) => data.gaugeType !== "linear",
	},
	{
		label: "",
		type: "custom",
		component: () => (
			<CollectionDivider dividerText="gauge_linear_ticks_bar_options" />
		),
		hidden: (data) => data.gaugeType !== "linear",
	},
	{
		name: "gaugeTicksWidth",
		type: "number",
		label: "gauge_ticks_width",
		default: 10,
		step: 1,
		min: 0,
		hidden: (data) => data.gaugeType !== "linear",
	},
	{
		name: "gaugeTicksWidthMinor",
		type: "number",
		label: "gauge_ticks_width_minor",
		default: 5,
		step: 1,
		min: 0,
		hidden: (data) => data.gaugeType !== "linear",
	},
	{
		name: "gaugeTicksPadding",
		type: "number",
		label: "gauge_ticks_padding",
		default: 5,
		step: 1,
		min: 0,
		hidden: (data) => data.gaugeType !== "linear",
	},
	{
		label: "",
		type: "custom",
		component: () => (
			<CollectionDivider dividerText="gauge_radial_ticks_bar_options" />
		),
		hidden: (data) => data.gaugeType !== "radial",
	},
	{
		name: "gaugeTicksAngle",
		type: "number",
		label: "gauge_ticks_angle",
		default: 270,
		step: 1,
		min: 0,
		max: 360,
		hidden: (data) => data.gaugeType !== "radial",
	},
	{
		name: "gaugeStartAngle",
		type: "number",
		label: "gauge_start_angle",
		default: 45,
		step: 1,
		min: 0,
		max: 360,
		hidden: (data) => data.gaugeType !== "radial",
	},
	{
		label: "",
		type: "custom",
		component: () => (
			<CollectionDivider dividerText="gauge_radial_coloring_options" />
		),
		hidden: (data) => data.gaugeType !== "radial",
	},
	{
		name: "gaugeColorNeedleCircleOuter",
		type: "color",
		label: "gauge_color_needle_circle_outer",
		default: "#f0f0f0",
		hidden: (data) => data.gaugeType !== "radial",
	},
	{
		name: "gaugeColorNeedleCircleOuterEnd",
		type: "color",
		label: "gauge_color_needle_circle_outer_end",
		default: "#ccc",
		hidden: (data) => data.gaugeType !== "radial",
	},
	{
		name: "gaugeColorNeedleCircleInner",
		type: "color",
		label: "gauge_color_needle_circle_inner",
		default: "#e8e8e8",
		hidden: (data) => data.gaugeType !== "radial",
	},
	{
		name: "gaugeColorNeedleCircleInnerEnd",
		type: "color",
		label: "gauge_color_needle_circle_inner_end",
		default: "#f5f5f5",
		hidden: (data) => data.gaugeType !== "radial",
	},
	{
		label: "",
		type: "custom",
		component: () => (
			<CollectionDivider dividerText="gauge_radial_needle_options" />
		),
		hidden: (data) => data.gaugeType !== "radial",
	},
	{
		name: "gaugeNeedleCircleSize",
		type: "number",
		label: "gauge_needle_circle_size",
		default: 10,
		step: 1,
		min: 0,
		hidden: (data) => data.gaugeType !== "radial",
	},
	{
		name: "gaugeNeedleCircleInner",
		type: "checkbox",
		label: "gauge_needle_circle_inner",
		default: true,
		hidden: (data) => data.gaugeType !== "radial",
	},
	{
		name: "gaugeNeedleCircleOuter",
		type: "checkbox",
		label: "gauge_needle_circle_outer",
		default: true,
		hidden: (data) => data.gaugeType !== "radial",
	},
	{
		label: "",
		type: "custom",
		component: () => (
			<CollectionDivider dividerText="gauge_radial_animation_options" />
		),
		hidden: (data) => data.gaugeType !== "radial",
	},
	{
		name: "gaugeAnimationTarget",
		type: "select",
		label: "gauge_animation_target",
		options: [
			{ value: "needle", label: "needle" },
			{ value: "plate", label: "plate" },
		],
		default: "needle",
		noTranslation: true,
		hidden: (data) => data.gaugeType !== "radial",
	},
	{
		name: "gaugeUseMinPath",
		type: "checkbox",
		label: "gauge_use_min_path",
		default: false,
		hidden: (data) => data.gaugeType !== "radial",
	},
	{
		label: "",
		type: "custom",
		component: () => (
			<CollectionDivider dividerText="gauge_ticks_bar_options" />
		),
	},
	{
		name: "gaugeExactTicks",
		type: "checkbox",
		label: "gauge_exact_ticks",
		default: false,
	},
	{
		name: "gaugeMajorTicks",
		type: "number",
		label: "gauge_major_ticks",
		default: 10,
		step: 1,
	},
	{
		name: "gaugeMinorTicks",
		type: "number",
		label: "gauge_minor_ticks",
		default: 0,
		step: 1,
	},
	{
		name: "gaugeStrokeTicks",
		type: "checkbox",
		label: "gauge_stroke_ticks",
		default: true,
	},
	{
		name: "gaugeMajorTicksInt",
		type: "number",
		label: "gauge_major_ticks_int",
		default: 1,
		step: 1,
	},
	{
		name: "gaugeMajorTicksDec",
		type: "number",
		label: "gauge_major_ticks_dec",
		default: 0,
		step: 1,
	},
	{
		name: "gaugeHighlightsWidth",
		type: "number",
		label: "gauge_highlights_width",
		default: 15,
		step: 1,
	},
	{
		name: "gaugeNumbersMargin",
		type: "number",
		label: "gauge_numbers_margin",
		default: 1,
		step: 1,
	},
	{
		label: "",
		type: "custom",
		component: () => (
			<CollectionDivider dividerText="gauge_progress_bar_options" />
		),
	},
	{
		name: "gaugeBarWidth",
		type: "number",
		label: "gauge_bar_width",
		default: 20,
		step: 1,
		min: 0,
		max: 50,
	},
	{
		name: "gaugeBarStrokeWidth",
		type: "number",
		label: "gauge_bar_stroke_width",
		default: 0,
		step: 1,
		min: 0,
	},
	{
		name: "gaugeBarProgress",
		type: "checkbox",
		label: "gauge_bar_progress",
		default: true,
	},
	{
		name: "gaugeBarShadow,",
		type: "number",
		label: "gauge_bar_shadow",
		default: 0,
		step: 1,
		min: 0,
	},
	{
		label: "",
		type: "custom",
		component: () => (
			<CollectionDivider dividerText="gauge_animation_options" />
		),
	},
	{
		name: "gaugeAnimation",
		type: "checkbox",
		label: "gauge_animation",
		default: true,
	},
	{
		name: "gaugeAnimationDuration",
		type: "number",
		label: "gauge_animation_duration",
		default: 500,
		step: 1,
		min: 0,
	},
	{
		name: "gaugeAnimationRule",
		type: "select",
		label: "gauge_animation_rule",
		options: [
			{ value: "linear", label: "linear" },
			{ value: "quad", label: "quad" },
			{ value: "quint", label: "quint" },
			{ value: "cycle", label: "cycle" },
			{ value: "bounce", label: "bounce" },
			{ value: "elastic", label: "elastic" },
			{ value: "dequad", label: "dequad" },
			{ value: "dequint", label: "dequint" },
			{ value: "decycle", label: "decycle" },
			{ value: "debounce", label: "debounce" },
			{ value: "delastic", label: "delastic" },
		],
		default: "cycle",
		noTranslation: true,
	},
	{
		name: "gaugeAnimatedValue",
		type: "checkbox",
		label: "gauge_animated_value",
		default: false,
	},
	{
		name: "gaugeAnimateOnInit",
		type: "checkbox",
		label: "gauge_animate_on_init",
		default: false,
	},
	{
		label: "",
		type: "custom",
		component: () => <CollectionDivider dividerText="gauge_coloring_options" />,
	},
	{
		name: "gaugeColorPlate",
		type: "color",
		label: "gauge_color_plate",
		default: "rgba(0,0,0,0)",
	},
	{
		name: "gaugeColorPlateEnd",
		type: "color",
		label: "gauge_color_plate_end",
		default: "rgba(0,0,0,0)",
	},
	{
		name: "gaugeColorMajorTicks",
		type: "color",
		label: "gauge_color_major_ticks",
		default: "#444",
	},
	{
		name: "gaugeColorMinorTicks",
		type: "color",
		label: "gauge_color_minor_ticks",
		default: "#666",
	},
	{
		name: "gaugeColorStrokeTicks",
		type: "color",
		label: "gauge_color_stroke_ticks",
		default: "#444",
	},
	{
		name: "gaugeColorTitle",
		type: "color",
		label: "gauge_color_title",
		default: "#888",
	},
	{
		nmae: "gaugeColorUnits",
		type: "color",
		label: "gauge_color_units",
		default: "#888",
	},
	{
		name: "gaugeColorNumbers",
		type: "color",
		label: "gauge_color_numbers",
		default: "#444",
	},
	{
		name: "gaugeColorNeedle",
		type: "color",
		label: "gauge_color_needle",
		default: "rgba(240,128,128,1)",
	},
	{
		name: "gaugeColorNeedleEnd",
		type: "color",
		label: "gauge_color_needle_end",
		default: "rgba(255,160,122,.9)",
	},
	{
		name: "gaugeColorValueText",
		type: "color",
		label: "gauge_color_value_text",
		default: "#444",
	},
	{
		name: "gaugeColorValueTextShadow",
		type: "color",
		label: "gauge_color_value_text_shadow",
		default: "rgba(0,0,0,0.3)",
	},
	{
		name: "gaugeColorBorderShadow",
		type: "color",
		label: "gauge_color_border_shadow",
		default: "rgba(0,0,0,0.5)",
	},
	{
		name: "gaugeColorBorderOuter",
		type: "color",
		label: "gauge_color_border_outer",
		default: "#ddd",
	},
	{
		name: "gaugeColorBorderOuterEnd",
		type: "color",
		label: "gauge_color_border_outer_end",
		default: "#aaa",
	},
	{
		name: "gaugeColorBorderMiddle",
		type: "color",
		label: "gauge_color_border_middle",
		default: "#eee",
	},
	{
		name: "gaugeColorBorderMiddleEnd",
		type: "color",
		label: "gauge_color_border_middle_end",
		default: "#f0f0f0",
	},
	{
		name: "gaugeColorBorderInner",
		type: "color",
		label: "gauge_color_border_inner",
		default: "#fafafa",
	},
	{
		name: "gaugeColorBorderInnerEnd",
		type: "color",
		label: "gauge_color_border_inner_end",
		default: "#ccc",
	},
	{
		name: "gaugeColorValueBoxRect",
		type: "color",
		label: "gauge_color_value_box_rect",
		default: "#888",
	},
	{
		name: "gaugeColorValueBoxRectEnd",
		type: "color",
		label: "gauge_color_value_box_rect_end",
		default: "#666",
	},
	{
		name: "gaugeColorValueBoxBackground",
		type: "color",
		label: "gauge_color_value_box_background",
		default: "#babab2",
	},
	{
		name: "gaugeColorValueBoxShadow",
		type: "color",
		label: "gauge_color_value_box_shadow",
		default: "rgba(0,0,0,1)",
	},
	{
		name: "gaugeColorNeedleShadowUp",
		type: "color",
		label: "gauge_color_needle_shadow_up",
		default: "rgba(2,255,255,0.2)",
	},
	{
		name: "gaugeColorNeedleShadowDown",
		type: "color",
		label: "gauge_color_needle_shadow_down",
		default: "rgba(188,143,143,0.45)",
	},
	{
		name: "gaugeColorBarStroke",
		type: "color",
		label: "gauge_color_bar_stroke",
		default: "#222",
	},
	{
		name: "gaugeColorBarProgress",
		type: "color",
		label: "gauge_color_bar_progress",
		default: "#ccc",
	},
	{
		name: "gaugeColorBarShadow",
		type: "color",
		label: "gauge_color_bar_shadow",
		default: "#000",
	},
	{
		name: "gaugeColorBarShadow",
		type: "color",
		label: "gauge_color_bar_shadow",
		default: "#000",
	},
	{
		name: "gaugeHighlightsLineCap",
		type: "select",
		label: "gauge_highlights_line_cap",
		options: [
			{ value: "butt", label: "butt" },
			{ value: "round", label: "round" },
			{ value: "square", label: "square" },
		],
		default: "butt",
		noTranslation: true,
	},
	{
		label: "",
		type: "custom",
		component: () => (
			<CollectionDivider dividerText="gauge_needle_configuration_options" />
		),
	},
	{
		name: "gaugeNeedle",
		type: "checkbox",
		label: "gauge_needle",
		default: true,
	},
	{
		name: "gaugeNeedleShadow",
		type: "checkbox",
		label: "gauge_needle_shadow",
		default: true,
	},
	{
		name: "gaugeNeedleType",
		type: "select",
		label: "gauge_needle_type",
		options: [
			{ value: "arrow", label: "arrow" },
			{ value: "line", label: "line" },
		],
		default: "arrow",
		noTranslation: true,
	},
	{
		name: "gaugeNeedleStart",
		type: "number",
		label: "gauge_needle_start",
		default: 5,
		step: 1,
		min: 0,
		max: 100,
	},
	{
		name: "gaugeNeedleEnd",
		type: "number",
		label: "gauge_needle_end",
		default: 85,
		step: 1,
		min: 0,
		max: 100,
	},
	{
		name: "gaugeNeedleWidth",
		type: "number",
		label: "gauge_needle_width",
		default: 4,
	},
	{
		label: "",
		type: "custom",
		component: () => <CollectionDivider dividerText="gauge_borders_options" />,
	},
	{
		name: "gaugeBorders",
		type: "checkbox",
		label: "gauge_borders",
		default: true,
	},
	{
		name: "gaugeBorderOuterWidth",
		type: "number",
		label: "gauge_border_outer_width",
		default: 3,
		min: 0,
	},
	{
		name: "gaugeBorderMiddleWidth",
		type: "number",
		label: "gauge_border_middle_width",
		default: 3,
		min: 0,
	},
	{
		name: "gaugeBorderInnerWidth",
		type: "number",
		label: "gauge_border_inner_width",
		default: 3,
		min: 0,
	},
	{
		name: "gaugeBorderShadowWidth",
		type: "number",
		label: "gauge_border_shadow_width",
		default: 3,
		min: 0,
	},
	{
		label: "",
		type: "custom",
		component: () => (
			<CollectionDivider dividerText="gauge_value_box_options" />
		),
	},
	{
		name: "gaugeValueBox",
		type: "checkbox",
		label: "gauge_value_box",
		default: true,
	},
	{
		name: "gaugeValueBoxStroke",
		type: "number",
		label: "gauge_value_box_stroke",
		default: 5,
		step: 1,
		min: 0,
	},
	{
		name: "gaugeValueBoxWidth",
		type: "number",
		label: "gauge_value_box_width",
		default: 0,
		step: 1,
		min: 0,
	},
	{
		name: "gaugeValueText",
		type: "text",
		label: "gauge_value_text",
		default: "",
	},
	{
		name: "gaugeValueTextShadow",
		type: "checkbox",
		label: "gauge_value_text_shadow",
		default: true,
	},
	{
		name: "gaugeValueBoxBorderRadius",
		type: "number",
		label: "gauge_value_box_border_radius",
		default: 2.5,
		step: 0.1,
		min: 0,
	},
	{
		name: "gaugeValueInt",
		type: "number",
		label: "gauge_value_int",
		default: 3,
		step: 1,
		min: 0,
	},
	{
		name: "gaugeValueDec",
		type: "number",
		label: "gauge_value_dec",
		default: 2,
		step: 1,
		min: 0,
	},
	{
		label: "",
		type: "custom",
		component: () => (
			<CollectionDivider dividerText="gauge_fonts_customization_options" />
		),
	},
	{
		name: "gaugeFontNumbers",
		type: "fontname",
		label: "gauge_font_numbers",
		default: "Arial",
	},
	{
		name: "gaugeFontTitle",
		type: "fontname",
		label: "gauge_font_title",
		default: "Arial",
	},
	{
		name: "gaugeFontUnits",
		type: "fontname",
		label: "gauge_font_units",
		default: "Arial",
	},
	{
		name: "gaugeFontValue",
		type: "fontname",
		label: "gauge_font_value",
		default: "Arial",
	},
	{
		label: "",
		name: "allFieldsDivider",
		type: "custom",
		component: () => <CollectionDivider />,
	},
	{
		name: "gaugeFontNumbersSize",
		type: "number",
		label: "gauge_font_numbers_size",
		default: 20,
		step: 1,
		min: 0,
	},
	{
		name: "gaugeFontTitleSize",
		type: "number",
		label: "gauge_font_title_size",
		default: 24,
		step: 1,
		min: 0,
	},
	{
		name: "gaugeFontUnitsSize",
		type: "number",
		label: "gauge_font_units_size",
		default: 22,
		step: 1,
		min: 0,
	},
	{
		name: "gaugeFontValueSize",
		type: "number",
		label: "gauge_font_value_size",
		default: 26,
		step: 1,
		min: 0,
	},
	{
		label: "",
		name: "allFieldsDivider",
		type: "custom",
		component: () => <CollectionDivider />,
	},
	{
		name: "gaugeFontNumbersStyle",
		type: "select",
		label: "gauge_font_numbers_style",
		options: [
			{ value: "normal", label: "normal" },
			{ value: "italic", label: "italic" },
			{ value: "oblique", label: "oblique" },
		],
		default: "normal",
		noTranslation: true,
	},
	{
		name: "gaugeFontTitleStyle",
		type: "select",
		label: "gauge_font_title_style",
		options: [
			{ value: "normal", label: "normal" },
			{ value: "italic", label: "italic" },
			{ value: "oblique", label: "oblique" },
		],
		default: "normal",
		noTranslation: true,
	},
	{
		name: "gaugeFontUnitsStyle",
		type: "select",
		label: "gauge_font_units_style",
		options: [
			{ value: "normal", label: "normal" },
			{ value: "italic", label: "italic" },
			{ value: "oblique", label: "oblique" },
		],
		default: "normal",
		noTranslation: true,
	},
	{
		name: "gaugeFontValueStyle",
		type: "select",
		label: "gauge_font_value_style",
		options: [
			{ value: "normal", label: "normal" },
			{ value: "italic", label: "italic" },
			{ value: "oblique", label: "oblique" },
		],
		default: "normal",
		noTranslation: true,
	},
	{
		label: "",
		name: "allFieldsDivider",
		type: "custom",
		component: () => <CollectionDivider />,
	},
	{
		name: "gaugeFontNumbersWeight",
		type: "select",
		label: "gauge_font_numbers_weight",
		options: [
			{ value: "normal", label: "normal" },
			{ value: "bold", label: "bold" },
			{ value: "bolder", label: "bolder" },
			{ value: "lighter", label: "lighter" },
			{ value: "100", label: "100" },
			{ value: "200", label: "200" },
			{ value: "300", label: "300" },
			{ value: "400", label: "400" },
			{ value: "500", label: "500" },
			{ value: "600", label: "600" },
			{ value: "700", label: "700" },
			{ value: "800", label: "800" },
			{ value: "900", label: "900" },
		],
		default: "normal",
		noTranslation: true,
	},
	{
		name: "gaugeFontTitleWeight",
		type: "select",
		label: "gauge_font_title_weight",
		options: [
			{ value: "normal", label: "normal" },
			{ value: "bold", label: "bold" },
			{ value: "bolder", label: "bolder" },
			{ value: "lighter", label: "lighter" },
			{ value: "100", label: "100" },
			{ value: "200", label: "200" },
			{ value: "300", label: "300" },
			{ value: "400", label: "400" },
			{ value: "500", label: "500" },
			{ value: "600", label: "600" },
			{ value: "700", label: "700" },
			{ value: "800", label: "800" },
			{ value: "900", label: "900" },
		],
		default: "normal",
		noTranslation: true,
	},
	{
		name: "gaugeFontUnitsWeight",
		type: "select",
		label: "gauge_font_units_weight",
		options: [
			{ value: "normal", label: "normal" },
			{ value: "bold", label: "bold" },
			{ value: "bolder", label: "bolder" },
			{ value: "lighter", label: "lighter" },
			{ value: "100", label: "100" },
			{ value: "200", label: "200" },
			{ value: "300", label: "300" },
			{ value: "400", label: "400" },
			{ value: "500", label: "500" },
			{ value: "600", label: "600" },
			{ value: "700", label: "700" },
			{ value: "800", label: "800" },
			{ value: "900", label: "900" },
		],
		default: "normal",
		noTranslation: true,
	},
	{
		name: "gaugeFontValueWeight",
		type: "select",
		label: "gauge_font_value_weight",
		options: [
			{ value: "normal", label: "normal" },
			{ value: "bold", label: "bold" },
			{ value: "bolder", label: "bolder" },
			{ value: "lighter", label: "lighter" },
			{ value: "100", label: "100" },
			{ value: "200", label: "200" },
			{ value: "300", label: "300" },
			{ value: "400", label: "400" },
			{ value: "500", label: "500" },
			{ value: "600", label: "600" },
			{ value: "700", label: "700" },
			{ value: "800", label: "800" },
			{ value: "900", label: "900" },
		],
		default: "normal",
		noTranslation: true,
	},
];

export default dialogFields;
