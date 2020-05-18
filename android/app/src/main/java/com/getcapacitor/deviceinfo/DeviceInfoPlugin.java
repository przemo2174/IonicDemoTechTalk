package com.getcapacitor.deviceinfo;

import android.os.Build;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;


@NativePlugin()
public class DeviceInfoPlugin extends Plugin {

    @PluginMethod()
    public void getDeviceInfo(PluginCall call) {

        JSObject info = new JSObject();

        info.put("manufacturer", Build.MANUFACTURER);
        info.put("brand", Build.BRAND);
        info.put("hardware", Build.HARDWARE);

        call.resolve(info);
    }
}
