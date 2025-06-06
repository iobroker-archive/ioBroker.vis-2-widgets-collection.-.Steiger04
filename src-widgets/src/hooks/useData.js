import { useCallback, useContext, useMemo, useState } from "react";
import { CollectionContext } from "../components/CollectionProvider";
// import useOidValue from "./useOidValue";
import useStyles from "./useStyles";

function useData(oid) {
	const {
		theme,
		widget,
		[`${oid}Object`]: oidObject,
		getPropertyValue,
	} = useContext(CollectionContext);

	const { fontStyles, textStyles, backgroundStyles } = useStyles(widget.style);
	const [activeIndex, setActiveIndex] = useState();
	// const oidValue = useOidValue(oid);
	const oidValue = getPropertyValue(oid);

	const oidName = oidObject?.common?.name;

	// Hilfsfunktionen
	const formatSize = useCallback(
		(size) => (typeof size === "number" ? `${size}%` : null),
		[],
	);
	const getDataValue = useCallback(
		(key, ext = "") => widget.data[`${key}${ext}`],
		[widget.data],
	);

	// States-Berechnung
	const { states, widgetStates, minValue, maxValue } = useMemo(() => {
		const processStates = () => {
			const states = [];
			const widgetStates = {};
			let minValue = null;
			let maxValue = null;

			const oidType = oidObject?.common?.type;
			const oidStates = oidObject?.common?.states || {};
			const oidEntries = Object.entries(oidStates);

			if (
				oidType === "number" ||
				oidType === "string" ||
				oidType === "boolean" ||
				oidType === "mixed"
			) {
				for (let i = 1; i <= Number(widget.data.values_count); i++) {
					const _value = widget.data[`value${i}`];
					const _alias = widget.data[`alias${i}`];
					const _unit = widget.data.unit;

					if (_value !== undefined && _value !== null && /\S/.test(_value)) {
						const oidEntry = oidEntries.find(([value]) => value === _value);

						if (oidEntry && oidType === "number") {
							oidEntry[0] = Number(oidEntry[0]);
						}

						states.push({
							value: oidEntry
								? oidEntry[0]
								: oidType === "number"
									? Number(_value)
									: _value,
							label: (
								_alias || (oidEntry ? oidEntry[1] : `${_value}${_unit}`)
							).replace(/(\r\n|\n|\r)/gm, ""),

							fontSize: formatSize(widget.data[`valueSize${i}`]),

							textColor: widget.data[`textColor${i}`],

							icon:
								widget.data[`icon${i}`] ||
								widget.data[`iconSmall${i}`] ||
								widget.data.icon ||
								null,
							iconSize:
								typeof widget.data[`iconSize${i}`] === "number"
									? widget.data[`iconSize${i}`]
									: null,
							iconWidth:
								typeof widget.data[`iconSize${i}`] === "number"
									? widget.data[`iconSize${i}`]
									: typeof widget.data.iconSize === "number"
										? widget.data.iconSize
										: 100,
							iconHeight:
								typeof widget.data[`iconSize${i}`] === "number"
									? widget.data[`iconSize${i}`]
									: typeof widget.data.iconSize === "number"
										? widget.data.iconSize
										: 100,
							iconXOffset:
								(!!getDataValue("iconXOffset", i) &&
									getDataValue("iconXOffset", i) !== "0px" &&
									getDataValue("iconXOffset", i)) ||
								"0px",
							iconYOffset:
								(!!getDataValue("iconYOffset", i) &&
									getDataValue("iconYOffset", i) !== "0px" &&
									getDataValue("iconYOffset", i)) ||
								"0px",
							iconColor:
								widget.data[`iconColor${i}`] || widget.data.iconColor || null,

							backgroundColor:
								widget.data.backgroundColor || backgroundStyles.backgroundColor,
							backgroundColorActive: getDataValue("backgroundColor", i),

							background: widget.data.background || backgroundStyles.background,
							backgroundActive: getDataValue("background", i),

							frameBackgroundColor:
								widget.data.frameBackgroundColor ||
								backgroundStyles.backgroundColor,
							frameBackgroundColorActive: getDataValue(
								"frameBackgroundColor",
								i,
							),

							frameBackground:
								widget.data.frameBackground || backgroundStyles.background,
							frameBackgroundActive: getDataValue("frameBackground", i),
						});
						widgetStates[oidEntry ? String(oidEntry[0]) : _value] =
							_alias || (oidEntry ? oidEntry[1] : `${_value}${_unit}`);
					}
				}
				if (oidType === "number" && states.length) {
					minValue = Math.min(...states.map((state) => state.value));
					maxValue = Math.max(...states.map((state) => state.value));
				}
			}

			/* if (oidType === "boolean") {
				for (let i = 1; i <= Number(widget.data.values_count); i++) {
					const _value = widget.data[`value${i}`];
					const _alias = widget.data[`alias${i}`];

					states.push({
						value: _value,
						label: _alias,
					});
					widgetStates[String(_value)] = _value;
				}
			} */

			return { states, widgetStates, minValue, maxValue };
		};

		return processStates();
	}, [oidObject, widget.data, getDataValue, formatSize, backgroundStyles]);

	// Styling-Daten
	const data = useMemo(() => {
		const getStyleData = (ext = "") => ({
			textColor:
				widget.data.textColor || textStyles.color || theme.palette.primary.main,
			textColorActive: getDataValue("textColor", ext),

			header: (
				widget.data.headerActive ||
				getDataValue("header", ext) ||
				widget.data.header ||
				oidName ||
				""
			).replace(/(\r\n|\n|\r)/gm, ""),
			headerSize:
				formatSize(widget.data.headerSize) ||
				formatSize(widget.data.headerSizeActive) ||
				formatSize(getDataValue("headerSize", ext)) ||
				fontStyles.fontSize,

			footer: (
				widget.data.footerActive ||
				getDataValue("footer", ext) ||
				widget.data.footer ||
				""
			).replace(/(\r\n|\n|\r)/gm, ""),
			footerSize:
				formatSize(widget.data.footerSize) ||
				formatSize(widget.data.footerSizeActive) ||
				formatSize(getDataValue("footerSize", ext)) ||
				fontStyles.fontSize,

			alias: (getDataValue("alias", ext) || "").replace(/(\r\n|\n|\r)/gm, ""),

			value:
				getDataValue("value", ext) &&
				`${getDataValue("value", ext)}${widget.data.unit !== undefined ? widget.data.unit : ""}`,
			valueSize: formatSize(widget.data.valueSize) || fontStyles.fontSize,
			valueSizeActive:
				typeof getDataValue("valueSize", ext) === "number" &&
				formatSize(getDataValue("valueSize", ext)),

			icon: !widget.data.noIcon && (widget.data.icon || widget.data.iconSmall),
			iconActive:
				!widget.data.noIcon &&
				(getDataValue("icon", ext) || getDataValue("iconSmall", ext)),
			iconSize:
				(typeof widget.data.iconSize === "number" &&
					`calc(24px * ${widget.data.iconSize} / 100)`) ||
				"24px",
			iconSizeActive:
				getDataValue("iconSize", ext) &&
				`calc(24px * ${getDataValue("iconSize", ext)} / 100)`,

			iconSizeActiveOnly: getDataValue("iconSize", ext),
			iconSizeOnly:
				getDataValue("iconSize", ext) || getDataValue("iconSize", ext) === 0
					? getDataValue("iconSize", ext)
					: widget.data.iconSize,

			iconColor: widget.data.iconColor,
			iconColorActive: getDataValue("iconColor", ext),

			iconHover: widget.data.iconHover && `${widget.data.iconHover}%`,
			iconHoverActive:
				getDataValue("iconHover", ext) && `${getDataValue("iconHover", ext)}%`,

			iconXOffset:
				(!!getDataValue("iconXOffset", ext) &&
					getDataValue("iconXOffset", ext) !== "0px" &&
					getDataValue("iconXOffset", ext)) ||
				/* (!!widget.data.iconXOffset &&
					widget.data.iconXOffset !== "0px" &&
					widget.data.iconXOffset) || */
				"0px",
			iconYOffset:
				(!!getDataValue("iconYOffset", ext) &&
					getDataValue("iconYOffset", ext) !== "0px" &&
					getDataValue("iconYOffset", ext)) ||
				/* (!!widget.data.iconYOffset &&
					widget.data.iconYOffset !== "0px" &&
					widget.data.iconYOffset) || */
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
			case "mixed":
			case "boolean":
			case "number":
			case "string": {
				const _activeIndex = states.findIndex(
					(state) => String(state.value) === String(oidValue),
				);

				if (_activeIndex !== -1) {
					setActiveIndex(_activeIndex + 1);
					return getStyleData(_activeIndex + 1);
				}

				return getStyleData("");
			}
			default:
				return getStyleData("");
		}
	}, [
		oidObject,
		oidValue,
		oidName,
		widget.data,
		states,
		theme,
		fontStyles,
		textStyles,
		backgroundStyles,
		formatSize,
		getDataValue,
	]);

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
