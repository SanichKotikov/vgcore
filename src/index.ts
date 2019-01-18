import { VGCore, External, cdrEventName } from '../index';

const external: External = window.external as any;
export const app: VGCore.Application = external.Application;

export const registerEvent = (name: cdrEventName, callback: Function) => {
  window[`on${name}`] = callback;
  external.RegisterEventListener(name, `window['on${name}']()`);
};

export const unregisterEvent = (name: cdrEventName) => {
  external.UnregisterEventListener(name);
};

export const boostStart = (): void => {
  app.Optimization = true;
  app.EventsEnabled = false;
  app.ActiveDocument.SaveSettings();
  app.ActiveDocument.PreserveSelection = true;
};

export const boostFinish = (): void => {
  app.ActiveDocument.PreserveSelection = true;
  app.ActiveDocument.RestoreSettings();
  app.EventsEnabled = true;
  app.Optimization = false;
  app.Refresh();
};
