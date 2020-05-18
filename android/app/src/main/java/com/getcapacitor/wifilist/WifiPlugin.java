package com.getcapacitor.wifilist;

import com.getcapacitor.JSArray;
import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

import java.util.ArrayList;
import java.util.List;

@NativePlugin()
public class WifiPlugin extends Plugin {

    @PluginMethod()
    public void getNetworks(PluginCall call) {
        //String message = call.getString("message");
        // More code here...

        List<String> list = new ArrayList<String>();
        list.add("Wifi 1");
        list.add("Wifi 2");
        list.add("Wifi 3");

        JSObject ret = new JSObject();
        JSArray networks = new JSArray(list);

        ret.put("wifi", networks);

        call.resolve(ret);
    }

    @PluginMethod()
    public void customFunction(PluginCall call) {
        // More code here...
        call.resolve();
    }
}
