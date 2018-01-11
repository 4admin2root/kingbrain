package com.tw.kingbrain.wrapper;

import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.widget.ProgressBar;

/**
 * Created by pxxu on 11/01/2018.
 */

public final class WebChromeClientWrapper extends WebChromeClient {
    private ProgressBar mProgressBar;

    public WebChromeClientWrapper(ProgressBar progressBar) {
        mProgressBar = progressBar;
    }

    @Override
    public void onProgressChanged(WebView view, int newProgress) {
        super.onProgressChanged(view, newProgress);
        mProgressBar.setMax(100);
        mProgressBar.setProgress(newProgress);
    }
}
