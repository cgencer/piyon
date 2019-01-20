<?php

/* sites/all/themes/gavias_unix/templates/page/header-3.html.twig */
class __TwigTemplate_de58d41770030cebd44c4c21bc768c962545af9b0d5c7fe2354f469fd37a2538 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("include" => 3, "set" => 5, "if" => 6);
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('include', 'set', 'if'),
                array(),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 1
        echo "<header id=\"header\" class=\"header-v3\">
  
  ";
        // line 3
        $this->loadTemplate((($context["directory"] ?? null) . "/templates/page/parts/topbar.html.twig"), "sites/all/themes/gavias_unix/templates/page/header-3.html.twig", 3)->display($context);
        // line 4
        echo "
  ";
        // line 5
        $context["class_sticky"] = "";
        // line 6
        echo "  ";
        if ((($context["sticky_menu"] ?? null) == 1)) {
            // line 7
            echo "    ";
            $context["class_sticky"] = "gv-sticky-menu";
            // line 8
            echo "  ";
        }
        echo "  

   <div class=\"header-main ";
        // line 10
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["class_sticky"] ?? null), "html", null, true));
        echo "\">
      <div class=\"container header-content-layout\">
         <div class=\"header-main-inner p-relative\">
            <div class=\"row\">
              <div class=\"col-md-3 col-sm-6 col-xs-8 branding\">
                ";
        // line 15
        if ($this->getAttribute(($context["page"] ?? null), "branding", array())) {
            // line 16
            echo "                  ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "branding", array()), "html", null, true));
            echo "
                ";
        }
        // line 18
        echo "              </div>

              <div class=\"col-md-9 col-sm-6 col-xs-4 p-static\">
                <div class=\"header-inner clearfix\">
                  <div class=\"main-menu\">
                    <div class=\"area-main-menu\">
                      <div class=\"area-inner\">
                        <div class=\"gva-offcanvas-mobile\">
                          <div class=\"close-offcanvas hidden\"><i class=\"fa fa-times\"></i></div>
                          ";
        // line 27
        if ($this->getAttribute(($context["page"] ?? null), "main_menu", array())) {
            // line 28
            echo "                            ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "main_menu", array()), "html", null, true));
            echo "
                          ";
        }
        // line 29
        echo "  

                          ";
        // line 31
        if ($this->getAttribute(($context["page"] ?? null), "offcanvas", array())) {
            // line 32
            echo "                            <div class=\"after-offcanvas hidden\">
                              ";
            // line 33
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "offcanvas", array()), "html", null, true));
            echo "
                            </div>
                         ";
        }
        // line 36
        echo "                        </div>  
                         
                        <div id=\"menu-bar\" class=\"menu-bar hidden-lg hidden-md\">
                          <span class=\"one\"></span>
                          <span class=\"two\"></span>
                          <span class=\"three\"></span>
                        </div>

                        ";
        // line 44
        if ($this->getAttribute(($context["page"] ?? null), "cart", array())) {
            // line 45
            echo "                          <div class=\"quick-cart\">
                            ";
            // line 46
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "cart", array()), "html", null, true));
            echo "
                          </div>
                        ";
        }
        // line 49
        echo "
                        ";
        // line 50
        if ($this->getAttribute(($context["page"] ?? null), "search", array())) {
            // line 51
            echo "                          <div class=\"gva-search-region search-region\">
                            <span class=\"icon\"><i class=\"fa fa-search\"></i></span>
                            <div class=\"search-content\">  
                              ";
            // line 54
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "search", array()), "html", null, true));
            echo "
                            </div>  
                          </div>
                        ";
        }
        // line 58
        echo "                      </div>
                    </div>
                  </div>  
                </div> 
              </div>

            </div>
         </div>
      </div>
   </div>

</header>
";
    }

    public function getTemplateName()
    {
        return "sites/all/themes/gavias_unix/templates/page/header-3.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  154 => 58,  147 => 54,  142 => 51,  140 => 50,  137 => 49,  131 => 46,  128 => 45,  126 => 44,  116 => 36,  110 => 33,  107 => 32,  105 => 31,  101 => 29,  95 => 28,  93 => 27,  82 => 18,  76 => 16,  74 => 15,  66 => 10,  60 => 8,  57 => 7,  54 => 6,  52 => 5,  49 => 4,  47 => 3,  43 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "sites/all/themes/gavias_unix/templates/page/header-3.html.twig", "/home/piyon/v8/sites/all/themes/gavias_unix/templates/page/header-3.html.twig");
    }
}
