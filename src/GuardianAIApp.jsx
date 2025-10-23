import React, { useState, useEffect } from 'react';
import { Shield, MapPin, Phone, MessageCircle, User, X, CheckCircle, Star, Award, Clock, AlertTriangle, Navigation } from 'lucide-react';

const GuardianAIApp = () => {
  const [screen, setScreen] = useState('splash');
  const [sosActive, setSosActive] = useState(false);
  const [guardianFound, setGuardianFound] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (screen === 'splash') {
      const timer = setTimeout(() => setScreen('home'), 3000);
      return () => clearTimeout(timer);
    }
  }, [screen]);

  useEffect(() => {
    if (sosActive && !guardianFound) {
      const timer = setTimeout(() => setGuardianFound(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [sosActive, guardianFound]);

  const activateSOS = () => {
    setSosActive(true);
    setScreen('sos');
    setGuardianFound(false);
  };

  const cancelSOS = () => {
    setSosActive(false);
    setGuardianFound(false);
    setScreen('home');
  };

  // Splash Screen
  if (screen === 'splash') {
    return (
      <div className="h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-red-900 flex flex-col items-center justify-center overflow-hidden">
        <div className="relative">
          <div className="absolute inset-0 animate-ping opacity-20">
            <div className="w-32 h-32 rounded-full bg-white"></div>
          </div>
          <Shield className="w-32 h-32 text-white animate-pulse" strokeWidth={1.5} />
        </div>
        <h1 className="text-5xl font-bold text-white mt-8 tracking-tight">Guardian AI</h1>
        <p className="text-purple-200 mt-4 text-lg">Help is always closer than you think.</p>
        
        {/* Network Animation */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-white rounded-full animate-pulse"
              style={{
                top: `${20 + i * 15}%`,
                left: `${15 + i * 12}%`,
                animationDelay: `${i * 0.3}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }

  // Home/Dashboard Screen
  if (screen === 'home') {
    return (
      <div className="h-screen bg-gray-50 flex flex-col">
        {/* Header */}
        <div className="bg-purple-900 text-white p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6" />
            <h2 className="text-xl font-bold">Guardian AI</h2>
          </div>
          <button onClick={() => setScreen('profile')} className="p-2 hover:bg-purple-800 rounded-full transition">
            <User className="w-6 h-6" />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          {/* SOS Button */}
          <div className="relative mb-8">
            <div className="absolute inset-0 animate-pulse bg-red-500 rounded-full blur-2xl opacity-30"></div>
            <button
              onClick={activateSOS}
              className="relative w-48 h-48 bg-gradient-to-br from-red-600 to-red-700 rounded-full shadow-2xl flex items-center justify-center transform hover:scale-105 transition-all duration-300 border-4 border-red-400"
            >
              <span className="text-white text-4xl font-bold">SOS</span>
            </button>
          </div>

          <p className="text-gray-700 text-center text-lg mb-8">
            Press in emergency or say <span className="font-bold">"Help Now"</span>
          </p>

          {/* Map Preview */}
          <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-4 border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-purple-900" />
              <span className="font-semibold text-gray-800">Your Location</span>
            </div>
            <div className="h-40 bg-gradient-to-br from-purple-100 to-red-50 rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-purple-900 rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                  ></div>
                ))}
              </div>
              <MapPin className="w-12 h-12 text-red-600 animate-bounce" />
            </div>
            <p className="text-sm text-gray-600 mt-3">Sector 12, Lucknow</p>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bg-white border-t border-gray-200 p-4 flex justify-around">
          <button onClick={() => setScreen('home')} className="flex flex-col items-center gap-1 text-purple-900">
            <Shield className="w-6 h-6" />
            <span className="text-xs font-medium">Home</span>
          </button>
          <button onClick={() => setScreen('community')} className="flex flex-col items-center gap-1 text-gray-400">
            <MapPin className="w-6 h-6" />
            <span className="text-xs font-medium">Community</span>
          </button>
          <button onClick={() => setScreen('profile')} className="flex flex-col items-center gap-1 text-gray-400">
            <User className="w-6 h-6" />
            <span className="text-xs font-medium">Profile</span>
          </button>
        </div>
      </div>
    );
  }

  // SOS Active Screen
  if (screen === 'sos') {
    return (
      <div className="h-screen bg-gray-900 flex flex-col relative">
        {/* Map View */}
        <div className="flex-1 relative bg-gradient-to-br from-gray-800 to-gray-900">
          {/* Simulated Map */}
          <div className="absolute inset-0 opacity-30">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-px h-8 bg-gray-600"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              ></div>
            ))}
          </div>

          {/* User Location */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute inset-0 animate-ping bg-red-500 rounded-full opacity-50"></div>
              <div className="w-6 h-6 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
            </div>
          </div>

          {/* Nearby Guardians */}
          {sosActive && (
            <>
              <div className="absolute top-1/3 left-1/3 animate-pulse">
                <div className="w-4 h-4 bg-purple-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="absolute top-2/3 left-2/3 animate-pulse" style={{ animationDelay: '0.3s' }}>
                <div className="w-4 h-4 bg-purple-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="absolute top-1/2 right-1/4 animate-pulse" style={{ animationDelay: '0.6s' }}>
                <div className="w-4 h-4 bg-purple-500 rounded-full border-2 border-white"></div>
              </div>
            </>
          )}
        </div>

        {/* Alert Panel */}
        <div className="bg-white rounded-t-3xl p-6 shadow-2xl">
          {!guardianFound ? (
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="animate-spin">
                  <AlertTriangle className="w-12 h-12 text-red-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">SOS Activated</h3>
              <p className="text-gray-600 mb-6">Finding nearby guardians...</p>
              <div className="flex justify-center gap-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-3 h-3 bg-purple-600 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-center gap-2 mb-4">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Guardian Found!</h3>
              <div className="bg-purple-50 rounded-xl p-4 mb-4 border border-purple-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center text-white font-bold">
                    RP
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-gray-900">Rahul Patel</p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Navigation className="w-4 h-4" />
                      <span>500m away • 2 mins</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-bold">4.9</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <button className="bg-red-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-red-700 transition">
                  <Phone className="w-5 h-5" />
                  Call Police
                </button>
                <button className="bg-purple-900 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-purple-800 transition">
                  <MessageCircle className="w-5 h-5" />
                  Chat
                </button>
              </div>

              <button
                onClick={cancelSOS}
                className="w-full bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition"
              >
                Cancel SOS
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Volunteer Response Screen
  if (screen === 'volunteer') {
    return (
      <div className="h-screen bg-gray-50 flex flex-col">
        <div className="bg-purple-900 text-white p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">Guardian Mode</h2>
          <button onClick={() => setScreen('home')}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full border-4 border-red-500 animate-pulse">
            <div className="flex justify-center mb-4">
              <AlertTriangle className="w-16 h-16 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">⚠️ SOS Alert Near You!</h3>
            <p className="text-gray-600 text-center mb-6">Woman in distress</p>
            
            <div className="bg-red-50 rounded-xl p-4 mb-6 border border-red-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Distance:</span>
                <span className="text-red-600 font-bold text-lg">500m away</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-medium">ETA:</span>
                <span className="text-red-600 font-bold text-lg">~2 minutes</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setScreen('sos')}
                className="bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition shadow-lg"
              >
                Accept
              </button>
              <button
                onClick={() => setScreen('home')}
                className="bg-gray-300 text-gray-700 py-4 rounded-xl font-bold text-lg hover:bg-gray-400 transition"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Profile Screen
  if (screen === 'profile') {
    return (
      <div className="h-screen bg-gray-50 flex flex-col">
        <div className="bg-purple-900 text-white p-4 flex items-center gap-3">
          <button onClick={() => setScreen('home')}>
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-xl font-bold">Volunteer Profile</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {/* Profile Header */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-900 to-red-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4">
                RP
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Rahul Patel</h3>
              <p className="text-gray-600 mb-4">Guardian Volunteer</p>
              
              {/* Trust Score */}
              <div className="bg-gradient-to-r from-purple-100 to-red-100 rounded-xl p-4 w-full mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-semibold">Trust Score</span>
                  <div className="flex items-center gap-2">
                    <Star className="w-6 h-6 text-yellow-500 fill-current" />
                    <span className="text-3xl font-bold text-purple-900">95</span>
                    <span className="text-gray-600">/100</span>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="w-full">
                <h4 className="font-bold text-gray-900 mb-3">Achievements</h4>
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-3 flex items-center gap-3">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                    <span className="font-semibold text-gray-800">Verified by Police</span>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 flex items-center gap-3">
                    <Award className="w-8 h-8 text-yellow-600" />
                    <span className="font-semibold text-gray-800">Top Helper</span>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 flex items-center gap-3">
                    <Clock className="w-8 h-8 text-purple-600" />
                    <span className="font-semibold text-gray-800">5 SOS Responses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <h4 className="font-bold text-gray-900 mb-4">Statistics</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-50 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-purple-900">5</p>
                <p className="text-sm text-gray-600">Total Responses</p>
              </div>
              <div className="bg-red-50 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-red-600">2.5 min</p>
                <p className="text-sm text-gray-600">Avg Response</p>
              </div>
            </div>
          </div>

          <button className="w-full bg-purple-900 text-white py-4 rounded-xl font-bold hover:bg-purple-800 transition shadow-lg">
            See Past Responses
          </button>
        </div>
      </div>
    );
  }

  // Community Feed Screen
  if (screen === 'community') {
    return (
      <div className="h-screen bg-gray-50 flex flex-col">
        <div className="bg-purple-900 text-white p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Community Safety</h2>
          <button onClick={() => setScreen('home')}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {/* Safety Alerts */}
          <div className="bg-white rounded-2xl shadow-lg p-4 mb-4 border-l-4 border-red-500">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 mb-1">Unsafe Zone Reported</h4>
                <p className="text-sm text-gray-600 mb-2">Sector 45, Lucknow • Poorly lit area</p>
                <p className="text-xs text-gray-500">2 hours ago • 12 reports</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-4 mb-4 border-l-4 border-yellow-500">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 mb-1">Caution Advised</h4>
                <p className="text-sm text-gray-600 mb-2">Gomti Nagar Extension • Late night</p>
                <p className="text-xs text-gray-500">5 hours ago • 8 reports</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-4 mb-4 border-l-4 border-green-500">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 mb-1">Safe Zone</h4>
                <p className="text-sm text-gray-600 mb-2">Hazratganj Market • Well-lit, crowded</p>
                <p className="text-xs text-gray-500">1 day ago • 45 verifications</p>
              </div>
            </div>
          </div>

          {/* Add Report Button */}
          <button className="w-full bg-purple-900 text-white py-4 rounded-xl font-bold hover:bg-purple-800 transition shadow-lg">
            Report Safety Status
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default GuardianAIApp;
