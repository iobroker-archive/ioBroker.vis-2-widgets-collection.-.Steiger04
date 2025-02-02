import { useContext, useMemo, useState } from "react";
import { CollectionContext } from "../components/CollectionProvider";
import useOidValue from "./useOidValue";
import useStyles from "./useStyles";

function useData(oid) {
	const { theme, widget, oidObject } = useContext(CollectionContext);
	const { fontStyles, textStyles, backgroundStyles } = useStyles(widget.style);
	const [activeIndex, setActiveIndex] = useState();
	const oidValue = useOidValue(oid);
	const oidName = oidObject?.common?.name;

	// Styling-Daten
	const data = useMemo(() => {
		// Hilfsfunktionen
		// const formatSize = (size) => (size || size === 0 ? `${size}%` : null);
		const formatSize = (size) => (typeof size === "number" ? `${size}%` : null);
		const getDataValue = (key, ext = "") => widget.data[`${key}${ext}`];

		const getStyleData = (ext = "") => ({
			textColor:
				widget.data.textColor || textStyles.color || theme.palette.primary.main,
			textColorActive: getDataValue("textColor", ext),

			header:
				widget.data.headerActive ||
				getDataValue("header", ext) ||
				widget.data.header ||
				oidName,
			headerSize:
				formatSize(widget.data.headerSize) ||
				formatSize(widget.data.headerSizeActive) ||
				formatSize(getDataValue("headerSize", ext)) ||
				fontStyles.fontSize,

			footer:
				widget.data.footerActive ||
				getDataValue("footer", ext) ||
				widget.data.footer,
			footerSize:
				formatSize(widget.data.footerSize) ||
				formatSize(widget.data.footerSizeActive) ||
				formatSize(getDataValue("footerSize", ext)) ||
				fontStyles.fontSize,

			alias: getDataValue("alias", ext),

			value:
				getDataValue("value", ext) &&
				`${getDataValue("value", ext)}${widget.data.unit}`,
			valueSize: formatSize(widget.data.valueSize) || fontStyles.fontSize,
			/* valueSizeActive:
				(getDataValue("valueSize", ext) ||
					getDataValue("valueSize", ext) === 0) &&
				formatSize(getDataValue("valueSize", ext)), */

			valueSizeActive:
				typeof getDataValue("valueSize", ext) === "number" &&
				formatSize(getDataValue("valueSize", ext)),

			icon: !widget.data.noIcon && (widget.data.icon || widget.data.iconSmall),
			iconActive:
				!widget.data.noIcon &&
				(getDataValue("icon", ext) || getDataValue("iconSmall", ext)),
			iconSize:
				/* ((widget.data.iconSize || widget.data.iconSize === 0) &&
					`calc(24px * ${widget.data.iconSize} / 100)`) ||
				"24px", */
				(typeof widget.data.iconSize === "number" &&
					`calc(24px * ${widget.data.iconSize} / 100)`) ||
				"24px",
			iconSizeActive:
				getDataValue("iconSize", ext) &&
				`calc(24px * ${getDataValue("iconSize", ext)} / 100)`,
			iconSizeOnly: getDataValue("iconSize", ext) || widget.data.iconSize,

			iconColor: widget.data.iconColor,
			iconColorActive: getDataValue("iconColor", ext),

			iconHover: widget.data.iconHover && `${widget.data.iconHover}%`,
			iconHoverActive:
				getDataValue("iconHover", ext) && `${getDataValue("iconHover", ext)}%`,

			iconXOffset:
				(!!getDataValue("iconXOffset", ext) &&
					getDataValue("iconXOffset", ext) !== "0px" &&
					getDataValue("iconXOffset", ext)) ||
				(!!widget.data.iconXOffset &&
					widget.data.iconXOffset !== "0px" &&
					widget.data.iconXOffset) ||
				"0px",
			iconYOffset:
				(!!getDataValue("iconYOffset", ext) &&
					getDataValue("iconYOffset", ext) !== "0px" &&
					getDataValue("iconYOffset", ext)) ||
				(!!widget.data.iconYOffset &&
					widget.data.iconYOffset !== "0px" &&
					widget.data.iconYOffset) ||
				"0px",

			backgroundColor:
				widget.data.backgroundColor || backgroundStyles.backgroundColor,
			backgroundColorActive: getDataValue("backgroundColor", ext),

			background: widget.data.background || backgroundStyles.background,
			backgroundActive: getDataValue("background", ext),

			frameBackgroundColor:
				widget.data.frameBackgroundColor || backgroundStyles.backgroundColor,
			frameBackgroundColorActive: getDataValue("frameBackgroundColor", ext),

			frameBackground:
				widget.data.frameBackground || backgroundStyles.background,
			frameBackgroundActive: getDataValue("frameBackground", ext),
		});

		const oidType = oidObject?.common?.type;

		switch (oidType) {
			case "boolean":
			case "number":
			case "string": {
				for (let i = 1; i <= Number(widget.data.values_count); i++) {
					if (
						widget.data[`value${i}`] !== undefined &&
						(widget.data[`value${i}`] === oidValue ||
							widget.data[`value${i}`] === String(oidValue))
					) {
						setActiveIndex(i);
						return getStyleData(i);
					}
				}
				return getStyleData("");
			}
			default:
				return getStyleData("");
		}
	}, [
		widget,
		fontStyles,
		textStyles,
		backgroundStyles,
		oidObject,
		oidValue,
		theme,
		oidName,
	]);

	// States-Berechnung
	const { states, widgetStates, minValue, maxValue } = useMemo(() => {
		const processStates = () => {
			const states = [];
			const widgetStates = {};
			let minValue = 0;
			let maxValue = 100;

			const oidType = oidObject?.common?.type;
			const oidStates = oidObject?.common?.states || {};
			const oidEntries = Object.entries(oidStates);

			if (oidType === "number" || oidType === "string") {
				for (let i = 1; i <= Number(widget.data.values_count); i++) {
					if (
						widget.data[`value${i}`] !== undefined &&
						widget.data[`value${i}`] !== null &&
						/\S/.test(widget.data[`value${i}`])
					) {
						const oidEntry = oidEntries.find(
							([value]) => value === widget.data[`value${i}`],
						);
						if (oidEntry && oidType === "number") {
							oidEntry[0] = Number(oidEntry[0]);
						}
						states.push({
							value: oidEntry
								? oidEntry[0]
								: oidType === "number"
									? Number(widget.data[`value${i}`])
									: widget.data[`value${i}`],
							label:
								widget.data[`alias${i}`] ||
								(oidEntry
									? oidEntry[1]
									: `${widget.data[`value${i}`]}${widget.data.unit}`),

							fontSize: widget.data[`valueSize${i}`],

							textColor: widget.data[`textColor${i}`],

							icon:
								widget.data[`icon${i}`] ||
								widget.data[`iconSmall${i}`] ||
								widget.data.icon ||
								null,
							/* iconWidth:
								typeof widget.data[`iconSize${i}`] === "number"
									? widget.data[`iconSize${i}`]
									: 100,
							iconHeight:
								typeof widget.data[`iconSize${i}`] === "number"
									? widget.data[`iconSize${i}`]
									: 100, */
							iconWidth:
								typeof widget.data[`iconSize${i}`] === "number"
									? widget.data[`iconSize${i}`]
									: typeof widget.data.sliderIconSize === "number"
										? widget.data.sliderIconSize
										: 100,
							iconHeight:
								typeof widget.data[`iconSize${i}`] === "number"
									? widget.data[`iconSize${i}`]
									: typeof widget.data.sliderIconSize === "number"
										? widget.data.sliderIconSize
										: 100,
							iconColor:
								widget.data[`iconColor${i}`] || widget.data.iconColor || null,
						});
						widgetStates[
							oidEntry ? String(oidEntry[0]) : widget.data[`value${i}`]
						] =
							widget.data[`alias${i}`] ||
							(oidEntry
								? oidEntry[1]
								: `${widget.data[`value${i}`]}${widget.data.unit}`);
					}
				}
				if (states.length) {
					minValue = Math.min(...states.map((state) => state.value));
					maxValue = Math.max(...states.map((state) => state.value));
				}
			}

			if (oidType === "boolean") {
				for (let i = 1; i <= Number(widget.data.values_count); i++) {
					states.push({
						value: widget.data[`value${i}`],
						label: widget.data[`alias${i}`],
					});
					widgetStates[String(widget.data[`value${i}`])] =
						widget.data[`value${i}`];
				}
			}

			return { states, widgetStates, minValue, maxValue };
		};

		return processStates();
	}, [oidObject, widget]);

	return {
		states,
		widgetStates,
		minValue,
		maxValue,
		data,
		activeIndex,
		setActiveIndex,
		oidValue,
	};
}

export default useData;
