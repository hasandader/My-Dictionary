package com.my_dictionary;

import android.app.Application;

import com.facebook.react.ReactApplication;
import io.invertase.firebase.RNFirebasePackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

import com.oblador.vectoricons.VectorIconsPackage;
import com.reactnativenavigation.NavigationApplication;
import com.BV.LinearGradient.LinearGradientPackage;

public class MainApplication extends Application implements ReactApplication {

  @Override
	public boolean isDebug() {
		// Make sure you are using BuildConfig from your own application
		return BuildConfig.DEBUG;
	}

	protected List<ReactPackage> getPackages() {
		// Add additional packages you require here
		// No need to add RnnPackage and MainReactPackage
		return Arrays.<ReactPackage>asList(
			new VectorIconsPackage(),
			new LinearGradientPackage()
		);
	}

	@Override
	public List<ReactPackage> createAdditionalReactPackages() {
		return getPackages();
  }
  
  @Override
public String getJSMainModuleName() {
	return "index";
}

}