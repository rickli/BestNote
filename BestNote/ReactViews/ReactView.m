//
//  ReactView.m
//  BestNote
//
//  Created by rick on 26/10/2016.
//  Copyright © 2016 Wenba. All rights reserved.
//

#import "ReactView.h"

@implementation ReactView

- (id) initWithCoder:(NSCoder *)aDecoder {
    self = [super initWithCoder:aDecoder];
    if (self) {
//        NSURL *jsCodeLocation = [NSURL URLWithString:@"http://10.88.1.90:8081/index.ios.bundle?platform=ios"];
        NSURL *jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"bundle/main" withExtension:@"jsbundle"];
        /*
         For production use, this `NSURL` could instead point to a pre-bundled file on disk:
        
           NSURL *jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
        
         To generate that file, run the curl command and add the output to your main Xcode build target:
        
           curl http://localhost:8081/index.ios.bundle -o main.jsbundle
         */
        _rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation moduleName:@"honer" initialProperties:nil launchOptions:nil];
        [self addSubview:_rootView];
    }
    return self;
}

- (void)layoutSubviews {
    [super layoutSubviews];
    _rootView.frame = self.bounds;
}
/*
// Only override drawRect: if you perform custom drawing.
// An empty implementation adversely affects performance during animation.
- (void)drawRect:(CGRect)rect {
    // Drawing code
}
*/

@end
