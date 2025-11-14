import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Calendar, TrendingUp, BarChart3 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import PageHeader from '@/components/PageHeader';
import MobileLayout from '@/components/MobileLayout';

const Reports = () => {
  return (
    <>
      <div className="hidden md:block">
        <div className="min-h-screen bg-background">
          <PageHeader title="Health Reports" showBackButton={false} />
          <div className="flex">
            <Navigation />
            
            <main className="flex-1 p-6">
              <div className="max-w-6xl mx-auto">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Cycle Report */}
              <Card className="pankhai-card hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-foreground">Cycle Report</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground text-center">
                    Detailed analysis of your menstrual cycle patterns
                  </p>
                  <Button className="w-full" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              {/* Symptoms Report */}
              <Card className="pankhai-card hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-secondary flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-foreground">Symptoms Report</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground text-center">
                    Track symptom patterns and correlations
                  </p>
                  <Button className="w-full" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              {/* Wellness Report */}
              <Card className="pankhai-card hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-accent flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-foreground">Wellness Report</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground text-center">
                    Overall health and lifestyle metrics
                  </p>
                  <Button className="w-full" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Recent Reports */}
            <Card className="pankhai-card">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Recent Reports
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "Monthly Cycle Summary - March 2024", date: "Mar 31, 2024", type: "Cycle" },
                    { title: "Symptom Correlation Analysis", date: "Mar 28, 2024", type: "Symptoms" },
                    { title: "Wellness Progress Report", date: "Mar 25, 2024", type: "Wellness" },
                  ].map((report, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <FileText className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{report.title}</div>
                          <div className="text-sm text-muted-foreground">{report.date} • {report.type}</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          View
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  </div>
  
  <div className="md:hidden">
    <MobileLayout>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">📊 Reports</h1>
      </div>
    </MobileLayout>
  </div>
</>
  );
};

export default Reports;