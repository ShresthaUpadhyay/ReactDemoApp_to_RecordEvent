package com.reactnct;

import android.os.Bundle;

import com.clevertap.android.sdk.CleverTapAPI;
import com.clevertap.react.CleverTapModule;
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;


import java.util.List;


public class MainActivity<packages> extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    SplashScreen.show(this);
    super.onCreate(savedInstanceState);

  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "ReactnCT";
  }





}
