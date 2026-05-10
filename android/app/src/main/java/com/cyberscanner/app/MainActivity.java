package com.cyberscanner.app;

import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebView;

public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        WebView webView = new WebView(this);
        setContentView(webView);

        webView.getSettings().setJavaScriptEnabled(true);

        webView.loadData(
            "<html><body style='background:black;color:lime;display:flex;justify-content:center;align-items:center;height:100vh;font-size:30px;'>CYBERSCANNER OK</body></html>",
            "text/html",
            "UTF-8"
        );
    }
}
