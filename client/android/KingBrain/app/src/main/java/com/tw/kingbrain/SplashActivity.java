package com.tw.kingbrain;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.ViewGroup;
import android.webkit.WebView;
import android.widget.ProgressBar;
import android.widget.Toast;

import com.tw.kingbrain.util.WebViewUtils;
import com.tw.kingbrain.wrapper.WebChromeClientWrapper;
import com.tw.kingbrain.wrapper.WebViewClientWrapper;

public class SplashActivity extends AppCompatActivity {
    private static final String TAG = "SplashActivity";

    private WebView mWebView;
    private ProgressBar mProgressBar;
    private NetworkChangeReceiver mChangeReceiver;
    private String mURL = "http://10.205.124.134:8080/index.html#!/login";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_slpash);
        mProgressBar = findViewById(R.id.content_progress);
        mWebView = findViewById(R.id.content_container);
        mWebView.setWebChromeClient(new WebChromeClientWrapper(mProgressBar));
        mWebView.setWebViewClient(new WebViewClientWrapper(mProgressBar));
        WebViewUtils.initWebView(mWebView);
        mWebView.loadUrl(mURL);
        mChangeReceiver = new NetworkChangeReceiver();
        IntentFilter filter = new IntentFilter("android.net.conn.CONNECTIVITY_CHANGE");
        registerReceiver(mChangeReceiver, filter);
    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if (KeyEvent.KEYCODE_BACK == keyCode && mWebView.canGoBack()) {
            mWebView.goBack();
            return true;
        }
        return super.onKeyDown(keyCode, event);
    }

    @Override
    protected void onDestroy() {
        unregisterReceiver(mChangeReceiver);
        if (mWebView != null) {
            mWebView.loadDataWithBaseURL(null, "", "text/html", "utf-8", null);
            ((ViewGroup) mWebView.getParent()).removeView(mWebView);
            mWebView.destroy();
            mWebView = null;
        }
        super.onDestroy();
    }

    class NetworkChangeReceiver extends BroadcastReceiver {
        @Override
        public void onReceive(Context context, Intent intent) {
            ConnectivityManager connectivityManager = (ConnectivityManager) getSystemService(CONNECTIVITY_SERVICE);
            NetworkInfo networkInfo = connectivityManager.getActiveNetworkInfo();
            if (networkInfo != null && networkInfo.isAvailable()) {
            } else {
                Toast.makeText(SplashActivity.this, R.string.miss_net, Toast.LENGTH_SHORT).show();
            }
        }
    }
}
