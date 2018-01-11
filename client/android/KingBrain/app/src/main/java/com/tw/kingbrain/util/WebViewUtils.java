package com.tw.kingbrain.util;

import android.webkit.WebSettings;
import android.webkit.WebView;

/**
 * Created by pxxu on 11/01/2018.
 */

public final class WebViewUtils {

    public static void initWebView (WebView webView) {
        WebSettings webSettings = webView.getSettings();
        webSettings.setSupportZoom(true);
        webSettings.setUseWideViewPort(true);
        webSettings.setJavaScriptEnabled(true);
        webSettings.setDisplayZoomControls(true);
        webSettings.setLoadWithOverviewMode(true);
        webSettings.setLayoutAlgorithm(WebSettings.LayoutAlgorithm.NARROW_COLUMNS);
    }
}
