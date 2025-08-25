export class AnalyticsTracker {
    private measurementId: string;
    
    constructor(measurementId: string) {
      this.measurementId = measurementId;
    }
    
    // Track page view
    trackPageView(pagePath: string, pageTitle?: string) {
      if (typeof gtag !== 'undefined') {
        gtag('config', this.measurementId, {
          page_path: pagePath,
          page_title: pageTitle
        });
      }
    }
    
    // Track custom events
    trackEvent(eventName: string, parameters: any = {}) {
      if (typeof gtag !== 'undefined') {
        gtag('event', eventName, {
          event_category: 'Form Interaction',
          event_label: parameters.label || '',
          value: parameters.value || 0,
          custom_parameter: parameters.custom_parameter || '',
          ...parameters
        });
      }
    }
    
    // Track form interactions
    trackFormInteraction(action: string, fieldName: string, value?: any) {
      this.trackEvent('form_interaction', {
        action: action,
        field_name: fieldName,
        field_value: value,
        event_category: 'Form',
        event_label: `${action}_${fieldName}`
      });
    }
    
    // Track form validation errors
    trackValidationError(fieldName: string, errorMessage: string) {
      this.trackEvent('form_validation_error', {
        field_name: fieldName,
        error_message: errorMessage,
        event_category: 'Form Error'
      });
    }
    
    // Track form submission
    trackFormSubmission(formType: string, success: boolean, data?: any) {
      this.trackEvent('form_submit', {
        form_type: formType,
        success: success,
        event_category: 'Form Submission',
        event_label: success ? 'success' : 'failed',
        value: success ? 1 : 0,
        user_province: data?.province || '',
        user_district: data?.district || ''
      });
    }
    
    // Track button clicks
    trackButtonClick(buttonName: string, context?: string) {
      this.trackEvent('button_click', {
        button_name: buttonName,
        context: context,
        event_category: 'UI Interaction'
      });
    }
    
    // Track autocomplete selections
    trackAutocompleteSelection(fieldType: string, selectedValue: string) {
      this.trackEvent('autocomplete_selection', {
        field_type: fieldType,
        selected_value: selectedValue,
        event_category: 'Form Input'
      });
    }
    
    // Track user behavior patterns
    trackUserBehavior(behaviorType: string, details?: any) {
      this.trackEvent('user_behavior', {
        behavior_type: behaviorType,
        details: JSON.stringify(details),
        event_category: 'User Behavior'
      });
    }
  }