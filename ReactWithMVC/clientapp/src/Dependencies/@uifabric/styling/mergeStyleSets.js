import { concatStyleSets } from "./concatStyleSets";
import { extractStyleParts } from "./extractStyleParts";
import { getStyleOptions } from "./StyleOptionsState";
import { applyRegistration, styleToRegistration } from "./styleToClassName";
/**
 * Takes in one or more style set objects, each consisting of a set of areas,
 * each which will produce a class name. Using this is analogous to calling
 * `mergeStyles` for each property in the object, but ensures we maintain the
 * set ordering when multiple style sets are merged.
 *
 * @param styleSets - One or more style sets to be merged.
 */
export function mergeStyleSets() {
  var styleSets = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    styleSets[_i] = arguments[_i];
  }
  return mergeCssSets(styleSets, getStyleOptions());
}
/**
 * Takes in one or more style set objects, each1consisting of a set of areas,
 * each which will produce a class name. Using this is analogous to calling
 * `mergeCss` for each property in the object, but ensures the
 * set ordering when multiple style sets are merged.
 *
 * @param styleSets - One or more style sets to be merged.
 * @param options - (optional) Options to use when creating rules.
 */
export function mergeCssSets(styleSets, options) {
  var _a, _b;
  // tslint:disable-next-line:no-any
  var classNameSet = { subComponentStyles: {} };
  var styleSet = styleSets[0];
  if (!styleSet && styleSets.length <= 1) {
    return { subComponentStyles: {} };
  }
  var concatenatedStyleSet = concatStyleSets.apply(void 0, styleSets);
  var registrations = [];
  for (var styleSetArea in concatenatedStyleSet) {
    if (concatenatedStyleSet.hasOwnProperty(styleSetArea)) {
      if (styleSetArea === "subComponentStyles") {
        classNameSet.subComponentStyles =
          concatenatedStyleSet.subComponentStyles || {};
        continue;
      }
      var styles = concatenatedStyleSet[styleSetArea];
      var _c = extractStyleParts(styles),
        classes = _c.classes,
        objects = _c.objects;
      if ((_a = objects) === null || _a === void 0 ? void 0 : _a.length) {
        var registration = styleToRegistration(
          options || {},
          { displayName: styleSetArea },
          objects
        );
        if (registration) {
          registrations.push(registration);
          classNameSet[styleSetArea] = classes
            .concat([registration.className])
            .join(" ");
        }
      } else {
        classNameSet[styleSetArea] = classes.join(" ");
      }
    }
  }
  for (
    var _i = 0, registrations_1 = registrations;
    _i < registrations_1.length;
    _i++
  ) {
    var registration1 = registrations_1[_i];
    if (registration1) {
      applyRegistration(
        registration1,
        (_b = options) === null || _b === void 0
          ? void 0
          : _b.specificityMultiplier
      );
    }
  }
  return classNameSet;
}
//# sourceMappingURL=mergeStyleSets.js.map
