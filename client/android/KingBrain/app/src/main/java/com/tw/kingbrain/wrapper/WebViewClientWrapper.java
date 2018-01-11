package com.tw.kingbrain.wrapper;

import android.graphics.Bitmap;
import android.view.View;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.ProgressBar;

/**
 * Created by pxxu on 11/01/2018.
 */

public final class WebViewClientWrapper extends WebViewClient {
    private ProgressBar mProgressBar;

    public WebViewClientWrapper(ProgressBar progressBar) {
        mProgressBar = progressBar;
    }

    @Override
    public void onPageStarted(WebView view, String url, Bitmap favicon) {
        super.onPageStarted(view, url, favicon);
        mProgressBar.setVisibility(View.VISIBLE);
    }

    @Override
    public void onPageFinished(WebView view, String url) {
        super.onPageFinished(view, url);
        mProgressBar.setVisibility(View.GONE);
    }
}
